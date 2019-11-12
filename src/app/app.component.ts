import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  sendTochild;
  numberGenerated;
  numbers=[];
  


received(message:any){
 
this.numberGenerated = message;
// (message % 2 === 0)? this.sendTochild = "even" :  this.sendTochild = "odd";
 //console.log(message);
}

}
