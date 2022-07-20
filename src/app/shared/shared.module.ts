import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import * as fromComponents from './components';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    //AÑADIR
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //HASTA AQUI

    RouterModule,

    CommonModule
  ],
  declarations: [...fromComponents.component, CardUserComponent],
  exports: [
    //AÑADIR
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

    RouterModule,

    ...fromComponents.component
    //HASTA AQUI
  ]
  
})
export class SharedModule { }
