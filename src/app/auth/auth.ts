import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [NgIf, RouterModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  loginVisible = false;
  registerVisible = false;

  showLogin() {
    this.loginVisible = true;
    this.registerVisible = false;
  }

  showRegister() {
    this.registerVisible = true;
    this.loginVisible = false;
  }
}
