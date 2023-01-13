import { TemplateResult } from "lit-html";
import ROUTER from "@/constants/ROUTER";

type RouteParam = {
  path: string;
  page: () => TemplateResult;
};

type Route = {
  testRegExp: RegExp;
  page: () => TemplateResult;
  params: string[];
};

const hash2path = (hash: string) => {
  const hashExp = /^#?(.*)/;
  const matches = hash.match(hashExp);

  if (!matches || !matches[1]) return undefined;
  return matches[1];
};

const findRoute = (path: string) => {
  return routeInfos.routes.find((route) => {
    if (route.testRegExp.test(path)) {
      locationInfos.params = extractUrlParams(route, path);

      return true;
    }

    return false;
  });
};

const updateLocationInfos = (path: string) => {
  locationInfos.currentPath = path;
  const currentRoute = findRoute(path) ?? null;

  locationInfos.currentPage = currentRoute ? currentRoute.page : null;
};

const extractUrlParams = (route: Route, path: string) => {
  if (route.params.length === 0) return {};

  const params: { [key: string]: string } = {};

  const matches = path.match(route.testRegExp);

  if (!matches) return params;

  matches.shift();

  matches.forEach((paramValue: string, index: number) => {
    const paramName = route.params[index];
    params[paramName] = paramValue;
  });

  return params;
};

const routeInfos: {
  routes: Route[];
  history: string[];
  lastOrder: string;
} = {
  routes: [],
  history: [],
  lastOrder: "",
};
const locationInfos: {
  currentPath: string | undefined;
  currentPage: null | (() => TemplateResult);
  params: {
    [key: string]: string;
  };
} = {
  currentPath: "",
  currentPage: null,
  params: {},
};

const _listeners: Function[] = [];

window.addEventListener("hashchange", () => {
  const path = hash2path(window.location.hash);

  if (!path) {
    throw Error("path is wrong");
  }

  updateLocationInfos(path);
  _listeners.forEach((l) => l());
});

export default {
  location: locationInfos,
  route: routeInfos,
  init(routes: RouteParam[], startRoute: string = "/") {
    routeInfos.routes = routes.map((route) => {
      const params: string[] = [];
      const parsedFragment = route.path
        .replace(/:(\w+)/g, (_, paramName) => {
          params.push(paramName);
          return "([^\\/]+)";
        })
        .replace(/\//g, "\\/");

      return {
        testRegExp: new RegExp(`^${parsedFragment}$`),
        page: route.page,
        params,
      };
    });
    routeInfos.history.push(startRoute);
    window.location.hash = startRoute;
  },
  go: (newPath: string) => {
    routeInfos.lastOrder = ROUTER.LAST_ORDER.GO;
    if (routeInfos.history.at(-1) !== newPath) {
      routeInfos.history.push(newPath);
      window.location.hash = newPath;
    }
  },
  back: () => {
    routeInfos.lastOrder = ROUTER.LAST_ORDER.BACK;

    if (routeInfos.history.length > 0) {
      routeInfos.history.pop();
      window.location.hash = routeInfos.history[routeInfos.history.length - 1];
    }
  },
  subscribe: (listener: Function) => {
    _listeners.push(listener);
  },
};
