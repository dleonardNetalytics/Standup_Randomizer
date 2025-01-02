import {Component, signal} from "@angular/core";

@Component ({
  selector: 'greeble',
  templateUrl: './greeble.html',
  styleUrls: ['./greeble.css']
})

export class Greeble {

  count=0;
  countDisplay= signal(this.count);


  clickMe(){
    this.countDisplay.set(this.count++);
    console.log(`Greeble clicked ${this.count}`);
  }

}
