import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_data } from 'src/app/data/constants/users.const';
import { ICardUser } from 'src/app/shared/components/cards/card-user/icard-user.metada';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  public users: ICardUser[] = USERS_data;

  public id:number;

  public currentUser: ICardUser;

  constructor( 
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.currentUser = this.users.find(user => user.id === +this.id);

  }

}
