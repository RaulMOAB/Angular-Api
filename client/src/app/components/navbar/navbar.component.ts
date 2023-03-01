import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false

  constructor(private storage: StorageService, private auth:AuthService) {}
  ngOnInit() {
    // Check the obserbable status
    this.auth.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  logout(): void {
    this.storage.removeUser();
    //this.userCookie.delete('userCookie');
    this.isLoggedIn = false;
    //this.router.navigate(['/']);
  }
}
