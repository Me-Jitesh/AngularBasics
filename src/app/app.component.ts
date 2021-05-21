import { Component } from '@angular/core';

@Component({

  // selector: 'app-root',   // Select by element name <app-root></app-root>

  // selector: '.app-root',   // Select by class name <div class="app-root"></div>

  selector: '[app-root"]',   // Select by attribute namee < div app-root></div>

  template: `<h1>Hola World !! , {{title}}</h1><br>
  <h3>Products Details</h3> 
  <my-product></my-product>`,     //Single & Double qoute have same use whereas back tick used to multine code

  styles: ["h1{ color:aquamarine;  text-align: center; }"]  //Applied Locally
})
export class AppComponent {
  title: String = 'By Jeetu !! ';     //    variable
}
