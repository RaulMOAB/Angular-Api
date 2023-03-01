import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  user_list!: User[];

  constructor(private userdb: UserService) {}

  ngOnInit(): void {
    this.user_list = [];
    this.userdb.getUsers().subscribe({
      next: (users) => {
        users.forEach((u: any) => {
          this.user_list.push(new User(u.id, u.name, u.password, u.email));
        });
        console.log(this.user_list);
      },
    });
  }
}
