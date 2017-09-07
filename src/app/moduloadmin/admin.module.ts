
/** Creacion d eun modulo propio */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// mis componetes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';


// mis  rotas hijas
import { AdminRoutingModule } from './admin-routing.module';


// ======================= mis Guards =======================
import {AdminGuard} from '../guards/admin.guard';
import { UserstorageService  } from '../services/userstorage.service';
import { UserService  } from '../services/user.service';

import { BusquedaPipe } from '../pipe/busqueda.pipe';


@NgModule({
	declarations: [
		MainComponent,
		AddComponent,
		ListComponent,
		EditComponent,

		BusquedaPipe
	],
	imports: [
		CommonModule,

		FormsModule,
		HttpModule,

		AdminRoutingModule
	],
	exports: [
		MainComponent,
		AddComponent,
		ListComponent,
		EditComponent
	],
	providers: [
		UserstorageService,
		UserService,
		AdminGuard
	]
})

/** en exports, con las etiquetas (componentes) que quiera usar fuera del modulo */


export class ModuloAdminModule { }
