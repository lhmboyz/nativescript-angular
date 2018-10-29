//Angular
import { Component, OnInit } from "@angular/core";

//Components
import { AppComponent } from "../../app.component";
import { GlobalComponent } from "../global.component";

//Services
import { TranslateService } from '@ngx-translate/core';

@Component({
    templateUrl: "./about.component.html",
    styleUrls: ['./home.component.scss']
})
export class AboutComponent extends GlobalComponent implements OnInit {
    constructor(
        public app: AppComponent,
        protected translateService: TranslateService) {
        super(app, translateService);

        this.app.menu = 'about';
    }

    ngOnInit(): void {
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');

        console.log(this.config.APPLICATION_NAME);
    }
}