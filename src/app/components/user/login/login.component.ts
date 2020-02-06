import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }

  Usuario: string;
  Contraseña: string; 

  ngOnInit() {
    console.log(this.Usuario);
  }

  login(): void{
    if(this.Usuario== 'admin' && this.Contraseña == 'admin'){
      this.router.navigate(["Usuario"]);
    }else{
      alert("Credenciales Invalidas");
    }
  }
}
