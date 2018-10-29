//Native Script
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

//Angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Libraries
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ngx-fonticon';
//TNSFontIconService.debug = true;

//Configs
import { Config } from './config/config';

//Layouts
import { LayoutComponent } from "./layouts/layout.component";
import { BottomBarComponent } from "./layouts/ui/bottom-bar.component";

//Components
import { SharedModule } from './shared.module';
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { GlobalComponent } from "./components/global.component";

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
        TNSFontIconModule.forRoot({
            'fa': './assets/fonts/fontawesome.css',
            'icmn': './assets/fonts/icomoon.css'
        }),
    ],
    declarations: [
        AppComponent,
        GlobalComponent,
        LayoutComponent,
        BottomBarComponent,
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
