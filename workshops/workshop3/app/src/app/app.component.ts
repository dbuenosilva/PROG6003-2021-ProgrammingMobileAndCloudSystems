import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "<h1>We can use HTML code here instead of file.html</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lap3app';
  message: string = "This is angular example interpolation.";
  message2: any;
  isShown: boolean = false;
  imgSrc: string = "assets/angular.png";
  colours : string[] = ["Red","Green", "Blue"];
  selectedColour: any;
  cv1: boolean = false;
  cv2: boolean = true;

  userSelection: any;

  itemChanged(idx: any) {
    this.userSelection = this.colours[idx];

  }

  changeText(){
    this.cv1 = true;
    this.cv2 = false;

  }

}
