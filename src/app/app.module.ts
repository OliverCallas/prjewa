

//CLASE TYPE SCRIPT MUY IMPORTANTE


import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,


    //SE AÑADEN  POR CADA COMPONENTE
    SkeletonComponent,
    FooterComponent,
    NavigationComponent
    //HASTA AQUI
    
  ],
  imports: [
    //AQUI VAN LOS MODULOS

    //CORE
    CoreModule,

    //SHAREMODULE
    SharedModule,

    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      //FUNCIONA PARA QUITAR EL SIGNO DE GATO A LAS RUTAS QUE AGREGA
      //POR DEFECTO ANGULAR
      provide: LocationStrategy,
      useClass: PathLocationStrategy
      //TODO ESTOS DOS
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
