import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    constructor(
        public translateService: TranslateService) {
    }

    ngOnInit() {
    }
}