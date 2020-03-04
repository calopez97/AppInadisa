import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../../services/index';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(private router: Router, public authService: AuthService) { }

  public User = '';
  public Password = ''; 

  ngOnInit() {
    var userSaveLogged = localStorage.getItem('userSaveLogged');
    if (userSaveLogged != '') {
      this.User = userSaveLogged;
    }
  }

  login(): void{
    this.isLoading = true;
    this.authService.LoginUser(this.User, this.Password)
      .then((res) => {
        this.redirectionHome();
      }).catch(err => {
        this.isLoading = false;
        Swal.fire(
          'Error!',
          'Por favor revise los datos ingresados',
          'error'
        )
      });
  }

  redirectionHome() {
    localStorage.setItem('userSaveLogged', this.User);
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
<<<<<<< HEAD
    this.router.navigate(['/home']);
=======
    this.isLoading = false;
    this.router.navigate(['/dashboard']);
>>>>>>> 545e1fbcba4c902387aa23d8e65004e0c8cf6720
  }
}
