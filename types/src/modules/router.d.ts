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
declare const _default: {
    location: {
        currentPath: string | undefined;
        currentPage: (() => TemplateResult<1 | 2>) | null;
        params: {
            [key: string]: string;
        };
    };
    route: {
        routes: Route[];
        history: string[];
        lastOrder: string;
    };
    init(routes: RouteParam[], startRoute?: string): void;
    go: (newPath: string) => void;
    back: () => void;
    subscribe: (listener: Function) => void;
};
export default _default;
