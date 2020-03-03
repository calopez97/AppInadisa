import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService} from '../../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, public authService: AuthService, public afAuth: AngularFireAuth) { }

  User: string;
  Password: string; 

  ngOnInit() {
  }

  login(): void{
    this.authService.loginUser(this.User, this.Password)
      .then((res) => {
        this.redirectionHome();
      }).catch(err => {
        Swal.fire(
          'Error!',
          'Por favor revise los datos ingresados',
          'error'
        )
      });
    // if(this.User == 'admin' && this.Password == 'admin'){
    //   this.router.navigate(["home"]);
    // }else{
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error!',
    //     text: 'Por favor revise los datos ingresados'
    //   });
    // }
  }

  redirectionHome() {
    const Toast = Swal.mixin({
      toast:  true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      icon: 'success',
      title: 'Bienvenido!'
    });
    this.router.navigate(['/dashboard']);
  }
}
