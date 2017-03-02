import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class PassportService {

 constructor(private http: Http) { 
    // Por si acaso, el usuario ya tiene un token en el localStorage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

// Metodo que recoja un usuario y un password y me almacene un token
public token: string;
 
  login(username: string,password: string): Observable<boolean>{
    // Defino el contenido del mensaje en las cabeceras
    let cabeceras = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://localhost:8080/api/authenticate',{
      name:username,
      password:password
    },new RequestOptions({headers:cabeceras}))
    .map((response: Response)=>{
        let token = response.json() && response.json().token;
        if(token){
          this.almacenarToken(token,username);
            return true;
        }
        return false;
    })
  }
  getMemberInfo(): Observable<any>{
    let cabeceras = new Headers({'Authorization':this.token });
    return this.http.get('http://localhost:8080/api/memberinfo',
    new RequestOptions({headers:cabeceras}))
    .map((response: Response)=>{
      return response.json();
    });
  }

logout(){
  this.token = null;
  localStorage.removeItem('currentUser');
}

private almacenarToken(token: string,username: string){
  // AlmacenarToken en el local storage!
  this.token = token;
          localStorage
            .setItem('currentUser',JSON.stringify(
              {name:username,token:token})
              );
}

















  
}
