import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  getInputValue(xyz: string) {

    console.log('You Typed ', xyz);


  }

  /*emitWordCount(e: Event): void {
    console.log(
      (e.target.value.match(/\S+/g) || []).length);
  }*/


}
