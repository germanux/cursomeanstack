import { Component, OnInit } from '@angular/core';
import { PassportService } from '../passport.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PassportService]
})
export class HomeComponent implements OnInit {

  constructor(private service: PassportService) { }

  ngOnInit() {
    this.service.getMemberInfo().subscribe((data)=>{
      console.log(data);
    })
  }

}
