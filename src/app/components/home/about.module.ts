//Native Script
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

//Angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClient } from '@angular/common/http';

//Libraries
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//Components
import { SharedModule } from '../../shared.module';
import { AboutComponent } from './about.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild([{ path: '', component: AboutComponent }]),

        NativeScriptCommonModule,
        NativeScriptFormsModule,

        SharedModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AboutComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutModule { }