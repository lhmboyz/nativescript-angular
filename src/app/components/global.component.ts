//Angular
import { Component, OnInit } from '@angular/core';

//Libraries
import * as utils from "tns-core-modules/utils/utils";

//Configs
import { Config } from '../config/config';
import { RouteCollection } from '../config/route.collection';
import { ApiCollection } from '../config/api.collection';

//Components
import { AppComponent } from "../app.component";

//Services
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: "ns-global",
    moduleId: module.id,
    templateUrl: "./global.component.html",
})
export class GlobalComponent implements OnInit {
    public config = Config;
    public routeCollection = RouteCollection;
    public apiCollection = ApiCollection;

    //Models
    public model: any;
    public models: any[] = [];    

    constructor(
        public app: AppComponent,
        protected translateService: TranslateService) {
    }

    ngOnInit() {
    }

    public openUrl(url) {
        utils.openUrl(url)
    }
}