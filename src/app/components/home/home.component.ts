import { Component, OnInit } from "@angular/core";
import { GlobalComponent } from "../global.component";

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends GlobalComponent implements OnInit {
    constructor(
        protected translateService: TranslateService) {
        super(translateService);
    }

    ngOnInit(): void {
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');
    }
}