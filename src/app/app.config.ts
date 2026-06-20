import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideHighlightOptions } from "ngx-highlightjs";

import { routes } from "app/app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHighlightOptions({
            coreLibraryLoader: () => import("highlight.js/lib/core"),
            lineNumbersLoader: () => import("ngx-highlightjs/line-numbers"), // Optional, add line numbers if needed
            languages: {
                typescript: () => import("highlight.js/lib/languages/typescript"),
                css: () => import("highlight.js/lib/languages/css"),
            },
        })
    ]
};
