import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  ans:number;


 isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}


  calculate(input : HTMLInputElement){
  	let val:number = parseInt(input.value);
  
  	if(this.isNumber(val)){
  	  	if(val % 2 == 0){
	  		this.ans = val * val;
	  		this.ans = this.ans-1;

	  	}

	  	else {
	  		this.ans = val * val;
	  		this.ans = this.ans+1;

	  	}


    }	  	

    else{
    	alert("Please enter a valid number!")
    }

  }

}
