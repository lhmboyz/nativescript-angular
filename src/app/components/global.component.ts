import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: "ns-global",
    moduleId: module.id,
    templateUrl: "./global.component.html",
})
export class GlobalComponent implements OnInit {
    constructor(
        protected translateService: TranslateService) {
    }

    ngOnInit() {
    }
}