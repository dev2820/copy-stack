import { TemplateResult } from "lit-html";

type Route = {
  path: string;
  page: () => TemplateResult;
};

const hash2path = (hash: string) => {
  const hashExp = /^#?(.*)/;
  const matches = hash.match(hashExp);

  if (!matches || !matches[1]) return undefined;
  return matches[1];
};

const findRoute = (path: string) => {
  return routeInfos.routes.find((route) => {
    const pathExp = new RegExp("^" + route.path + "$");
    return pathExp.test(path);
  });
};

const updateLocationInfos = (path: string) => {
  locationInfos.currentPath = path;
  const currentRoute = findRoute(path) ?? null;

  locationInfos.currentPage = currentRoute ? currentRoute.page : null;
};

const routeInfos: {
  routes: Route[];
} = {
  routes: [],
};
const locationInfos: {
  currentPath: string | undefined;
  currentPage: null | (() => TemplateResult);
} = {
  currentPath: "",
  currentPage: null,
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
  init(routes: Route[]) {
    window.location.hash = "/";
    routeInfos.routes = routes;
  },
  go: (newPath: string) => {
    window.location.hash = newPath;
  },
  subscribe: (listener: Function) => {
    _listeners.push(listener);
  },
};
