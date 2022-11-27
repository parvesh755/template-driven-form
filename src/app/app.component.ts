import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyserviceService } from './myservice.service';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Angular 6 Project!';
  firstName: string | undefined;
  lastName: string | undefined;
  emailid: string | undefined;
  phone: Number | undefined;
  age:number | undefined;
  address:string | undefined;
  city:string | undefined;
  state:string | undefined;
  gip:number | undefined;



   //userlogin: any;
   formdata:any;
   passwd: any;
  
   constructor(private myservice: MyserviceService) { }
    ngOnInit() {
      this.formdata = new FormGroup({ 
        firstName: new FormControl(""),
        lastName: new FormControl(""),
        emailid: new FormControl(""),
        phone: new FormControl(""),
        age: new FormControl(""),
        address: new FormControl(""),
        city: new FormControl(""),
        state: new FormControl(""),
        gip: new FormControl("")


        
     });     }
  //  onClickSubmit(data:any) {

  //     alert("Entered Email id : " + data.emailid);

  //  }

   onClickSubmit(data:any) 
   {
    this.firstName = data.firstName,
    this.lastName = data.lastName,
    this.emailid = data.emailid,
    this.phone = data.phone,
    this.age = data.age,
    this.address = data.address,
    this.city = data.city,
    this.state = data.state,
    this.gip = data.gip

  
  }
}


