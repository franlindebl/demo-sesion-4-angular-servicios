import { Component, OnInit } from '@angular/core';
import { UsersService, User } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // variable local con el listado de users
  public users: User[] = [];

  constructor(private usersService: UsersService) {
    // Nos subscribimos a la petición del user service
    this.usersService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
  }
}
