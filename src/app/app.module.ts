//Native Script
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//Angular
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Libraries

//Configs
import { Config } from './config/config';

//Components
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { GlobalComponent } from "./components/global.component";
import { HomeComponent } from "./components/home/home.component";

//Services
import { TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        HttpClientModule,
        AppRoutingModule,        

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    declarations: [
        AppComponent,
        GlobalComponent,
        HomeComponent,
    ],
    providers: [
        TranslateService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
