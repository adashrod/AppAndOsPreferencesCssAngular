import { Routes } from "@angular/router";

import { EmptyComponent } from "app/components/empty/empty.component";
import { Strategy1CssVarsAndClassesComponent } from "app/components/strategy1-css-vars-and-classes/strategy1-css-vars-and-classes.component";
import { Strategy2ContainerStyleComponent } from "app/components/strategy2-container-style/strategy2-container-style.component";
import { Strategy3CssIfComponent } from "app/components/strategy3-css-if/strategy3-css-if.component";

export const routes: Routes = [{
    path: "",
    component: EmptyComponent
}, {
    path: "strategy-1",
    component: Strategy1CssVarsAndClassesComponent
}, {
    path: "strategy-2",
    component: Strategy2ContainerStyleComponent
}, {
    path: "strategy-3",
    component: Strategy3CssIfComponent
}];
