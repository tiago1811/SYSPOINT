import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home }
];
