import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppOptions } from "nativescript-angular/platform-common";

import { AppModule } from "./app/app.module";
//import "./app/livesync-navigation";

const options: AppOptions = {};
// tslint:disable-next-line:no-string-literal
/*
if (module["hot"]) {
    const hmrUpdate = require("nativescript-dev-webpack/hmr").hmrUpdate;

    options.hmrOptions = {
        moduleTypeFactory: () => AppModule,
        livesyncCallback: (platformReboot) => {
            console.log("HMR: Sync...");
            hmrUpdate();
            setTimeout(platformReboot, 0);
        }
    };
    hmrUpdate();

    // Path to your app module.
    // You might have to change it if your module is in a different place.
    // tslint:disable-next-line:no-string-literal
    module["hot"].accept(["./app/app.module"]);
}
*/

// !!! Don't forget to pass the options when creating the platform
platformNativeScriptDynamic(options).bootstrapModule(AppModule);