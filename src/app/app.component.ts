import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  snacks: any;
  ngOnInit(): void {
    this.getSnacks();
    

  }


  constructor(private http: HttpClient) {
    this.http = http;
   }


   getSnacks() {
    return this.http
    .get('https://demo9298332.mockable.io/snacks', { 
    })
    .subscribe((response: any) => {
      // some response manipulation
      this.snacks = response.snacks;
      console.log(this.snacks);
    });
}

sortAlphabetically() {

  this.snacks = this.snacks.sort((a, b) => (a.naam > b.naam) ? 1 : -1)
}

// loop true all this.snacks, if no image, then dont show object => delete from array 

removeSnacksWithoutImages() {

  var toRemove = [];
  
  // this.snacks.forEach(function(snack, index, snacks) {
  //   if(snack.img === '') {
  //     //  snacks.splice(index, 1);
  //      toRemove.push(snack)
  //   }
  //   console.log(snack);
  // });


  this.snacks = this.snacks.filter(function(value){

    if(value.hasOwnProperty('img') == false || value.img === '') {
      return false;
    }
    return true;
    // return value.img != '' || value.img;

});
  
}



// ifNoImage() {
//   for (var i=0; i<this.snacks.)
//   // if(this.snacks != this.snacks.img) {

//   // }
// }


filterButton() {
  document.getElementById("myDropdown").classList.toggle("show");
};

  
  title = 'snackbar';
}

