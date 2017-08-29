
/** Creacion d eun modulo propio */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GuardarEmailComponent } from './guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './main-email/main-email.component';


@NgModule({
  declarations: [
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    HttpModule
  ],
  exports: [MainEmailComponent]
})

export class ModuloEmailModule { }
