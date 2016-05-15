import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Ng2rc1AppComponent, environment } from './app/';

// Add all operators to Observable
import 'rxjs/Rx';


import { TohComponent }       from './app/art-heros/art-heros-toc';
import { WikiComponent }      from './app/art-heros/wiki.component';
import { WikiSmartComponent } from './app/art-heros/wiki-smart.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2rc1AppComponent);
