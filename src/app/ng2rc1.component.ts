import { Component } from '@angular/core';
//import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { ArtHerosComponent } from './art-heros/art-heros.component';

@Component({
  moduleId: module.id,
  selector: 'ng2rc1-app',
  templateUrl: 'ng2rc1.component.html',
  styleUrls: ['ng2rc1.component.css'],
  directives:[ArtHerosComponent]
})
export class Ng2rc1AppComponent {
  title = 'The NG2 RC1 Works!';
}
