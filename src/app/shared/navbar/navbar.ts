import { Component, EventEmitter, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search } from './search/search';
import { Downdrop } from './downdrop/downdrop';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    
    Search,
    Downdrop
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Output() triggerAction = new EventEmitter<void>();

  messagesOpen: boolean = false;
  notificationsOpen: boolean = false;

  toggleMessages() {
    this.messagesOpen = !this.messagesOpen;
    this.notificationsOpen = false;
  }

  toggleNotifications() {
    this.notificationsOpen = !this.notificationsOpen;
    this.messagesOpen = false; 
  }

  openSidebar() {
    this.triggerAction.emit();
  }
}
