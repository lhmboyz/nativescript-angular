import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { Page } from "tns-core-modules/ui/page";

@Component({
    templateUrl: "./layout.component.html",
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    
    constructor(
        public app: AppComponent,
        private page: Page) {
    }

    ngOnInit() {
        //Sembunyikan action bar di layout, karena tiap component punya action bar sendiri-sendiri
        this.page.actionBarHidden = true;
    }
}