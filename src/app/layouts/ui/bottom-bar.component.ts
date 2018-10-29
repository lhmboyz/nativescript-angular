//Angular
import { Component, OnInit } from "@angular/core";

//Configs
import { RouteCollection } from '../../config/route.collection';

//Components
import { AppComponent } from "../../app.component";

@Component({
    selector: "BottomBar",
    moduleId: module.id,
    templateUrl: "./bottom-bar.component.html",
    styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {
    public routeCollection = RouteCollection;

    constructor(
        public app: AppComponent) {
    }

    ngOnInit() {
    }
}