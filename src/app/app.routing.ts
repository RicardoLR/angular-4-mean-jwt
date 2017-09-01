
/** Creacion de ROUTER */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// mis componetes
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { KeepersComponent } from './components/keepers/keepers.component';

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


const appRoutes: Routes = [

	{path: '', component: HomeComponent},
	{path: '', redirectTo: 'home', pathMatch:'full'},
	{path: 'home', component: HomeComponent},

	{path: 'tienda', component: TiendaComponent},
	{path: 'animales', component: AnimalsComponent},
	{path: 'contacto', component: ContactComponent},
	{path: 'cuidadores', component: KeepersComponent},

	{path: 'login', component: LoginComponent},
	{path: 'registro', component: RegistroComponent},
	{path: 'mis-datos', component: UserEditComponent},

	{path: '**', component: HomeComponent},

];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
