import {Component} from '@angular/core';
import {Comments} from './comments';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        
        <p>
          Aflkdjsd
          sdlFjLKJDSFL:LSDFK
          KLSDFLJSD:FLLSDF"
          DSLFSKD:FJS:LDJF
          SDLFKSDJFL:SDFSDF
          
        </p>
        <p>
          Aflkdjsd
          sdlFjLKJDSFL:LSDFK
          KLSDFLJSD:FLLSDF"
          DSLFSKD:FJS:LDJF
          SDLFKSDJFL:SDFSDF
          
        </p>
        <p>
          Aflkdjsd
          sdlFjLKJDSFL:LSDFK
          KLSDFLJSD:FLLSDF"
          DSLFSKD:FJS:LDJF
          SDLFKSDJFL:SDFSDF
          
        </p>
        
      </article>
      @defer (on viewport) {
      <comments />
      } @placeholder {
        <p>Future comments </p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
  `,
  imports: [Comments],
})
export class App {}

import {Component} from '@angular/core';

@Component({
  selector: 'comments',
  template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
})
export class Comments {}