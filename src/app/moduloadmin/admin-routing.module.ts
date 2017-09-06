
/** Creacion de ROUTER */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// mis componetes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';


// ======================= mis Guards =======================
import {AdminGuard} from '../guards/admin.guard';


/** ejemplo de turas hijas, como:  

	http://localhost:4200/admin-panel/listado
	http://localhost:4200/admin-panel/crear
	http://localhost:4200/admin-panel/aditar


	Porque metemos en MainComponent el router-oulet, porque es el padre  "component: MainComponent"
*/
const adminRouter: Routes = [
	{
		path: 'admin-panel',
		component: MainComponent,
		canActivate: [AdminGuard],
		children: [
			{path:'', redirectTo: 'listado', pathMatch:'full'},

			{path:'listado', component: ListComponent},
			{path:'crear', component: AddComponent},
			{path:'aditar', component: EditComponent}
		]
	},
	
	{path:'listado-del-panel', component: ListComponent}
	
];

@NgModule({
	imports : [
		RouterModule.forChild(adminRouter)	
	],
	exports: [
		RouterModule
	]
	
})

export class AdminRoutingModule { }