import { Routes } from "@angular/router";

import { Strategy1CssIfComponent } from "app/components/strategy1-css-if/strategy1-css-if.component";
import { Strategy2ContainerStyleComponent } from "app/components/strategy2-container-style/strategy2-container-style.component";
import { WelcomeComponent } from "app/components/welcome/welcome.component";

export const routes: Routes = [{
    path: "",
    component: WelcomeComponent
}, {
    path: "strategy-1",
    component: Strategy1CssIfComponent
}, {
    path: "strategy-2",
    component: Strategy2ContainerStyleComponent
}];
