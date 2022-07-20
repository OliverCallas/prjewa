import { Component, OnInit } from '@angular/core';
import { USERS_data } from 'src/app/data/constants/users.const';
import { ICardUser } from 'src/app/shared/components/cards/card-user/icard-user.metada';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: ICardUser[] = USERS_data;
  
  constructor() { }

  ngOnInit(): void {
  }

}
