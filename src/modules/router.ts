import { TemplateResult } from "lit-html";

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
} = {
  routes: [],
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
  init(routes: RouteParam[]) {
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

    window.location.hash = "/";
  },
  go: (newPath: string) => {
    window.location.hash = newPath;
  },
  subscribe: (listener: Function) => {
    _listeners.push(listener);
  },
};
