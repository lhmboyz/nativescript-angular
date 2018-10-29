//Angular
import { Component, OnInit } from "@angular/core";
import * as Platform from "platform";

//Libraries
import { timer } from 'rxjs';
import { timeInterval, pluck, take } from 'rxjs/operators';

//Components
import { AppComponent } from "../../app.component";
import { GlobalComponent } from "../global.component";

//Services
import { TranslateService } from '@ngx-translate/core';

@Component({
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends GlobalComponent implements OnInit {
    public _isRunAnimation: boolean = true;

    constructor(
        public app: AppComponent,
        protected translateService: TranslateService) {
        super(app, translateService);

        this.app.menu = 'home';
    }

    ngOnInit(): void {
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');

        this.models['sprite'] = [];
        this.addItem();

        this.timer(0.01);
    }

    public addItem() {
        let size = Math.floor((Math.random() * 25)) + 50;
        this.models['sprite'].push({
            x: Math.floor((Math.random() * (Platform.screen.mainScreen.widthDIPs - size))),
            y: Math.floor((Math.random() * (Platform.screen.mainScreen.heightDIPs - 195 - size))),
            dx: (Math.floor((Math.random() * 2)) * 2 - 1) * 5,
            dy: (Math.floor((Math.random() * 2)) * 2 - 1) * 5,
            width: size,
            height: size
        });
    }

    public timer(speed = 1) {
        timer(speed * 1000, speed * 1000)
            .subscribe(result => {
                if (this._isRunAnimation) {
                    for (let i = 0; i < this.models['sprite'].length; i++) {
                        let x1 = this.models['sprite'][i].x + this.models['sprite'][i].dx;
                        let x2 = this.models['sprite'][i].x + this.models['sprite'][i].width + this.models['sprite'][i].dx;
                        let y1 = this.models['sprite'][i].y + this.models['sprite'][i].dy;
                        let y2 = this.models['sprite'][i].y + this.models['sprite'][i].height + this.models['sprite'][i].dy;
                        if ((x1 <= 0) || (x2 >= Platform.screen.mainScreen.widthDIPs)) {
                            this.models['sprite'][i].dx *= -1;
                        }
                        if ((y1 <= 0) || (y2 >= Platform.screen.mainScreen.heightDIPs - 195)) {
                            this.models['sprite'][i].dy *= -1;
                        }
                        this.models['sprite'][i].x += this.models['sprite'][i].dx;
                        this.models['sprite'][i].y += this.models['sprite'][i].dy;
                    }
                }
            })
    }

    public toggleAnimation() {
        this._isRunAnimation = !this._isRunAnimation;
    }
}