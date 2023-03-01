import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

   isLoggedIn!:boolean;
   errorMessage = '';
   form: any = {
    username: null,
    password: null,
  };
  

  constructor(private auth:AuthService, private storage:StorageService){}

  ngOnInit(){
    this.isLoggedIn = false;
    if (this.storage.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.auth.login(username, password).subscribe((res) => {
      if (res !== null) {
        console.log(res); //devuelve token
        console.log('respuesta bd');
        // Save on localStorage
        this.storage.saveUser(res);
        //Save cookie
        //this.userCookie.set('userCookie', JSON.stringify(res));
        this.auth.isLoggedIn.subscribe();

        //this.router.navigate(['']);
      } else {
        //login failed
        this.errorMessage = 'Incorrects username or password';
      }
    });
  }

}
