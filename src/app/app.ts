import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './shared/sidebar/sidebar';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
@Component({
  selector: 'app-root',
  imports:[
  RouterOutlet ,
  Sidebar,
  Navbar,
  Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'dashboard';
  isBoxActive = true;
  emitSidebarFn() {
    this.isBoxActive = !this.isBoxActive;
  }
}
