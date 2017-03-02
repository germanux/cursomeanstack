import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassportService } from '../passport.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
  providers: [PassportService]
})
export class LoginComponent implements OnInit {

  private user:any = {};
  constructor(private router: Router,private service: PassportService) { }

  ngOnInit() {
  }
  autenticar(){
    this.service.login(this.user.username,this.user.pass)
      .subscribe(result => {
        if(result === true){
            this.router.navigate(['/'])
        }else{
          this.user = {};
        }
      })
  }
}
