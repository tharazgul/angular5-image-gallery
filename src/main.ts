import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {Angular5ImageGalleryModule} from "./app/angular5imagegallery.module";
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(Angular5ImageGalleryModule)
  .catch(err => console.log(err));
