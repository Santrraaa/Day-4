import { Component, signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // collegename="AmalJyothi"

  // person={
  //   name:'santra',
  //   email:'santra2028@gmail.com',
  //   contactno:'1234567'
  // }
  protected readonly title = signal('project4');
}
