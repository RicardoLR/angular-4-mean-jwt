
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

const appRoutes: Routes = [

	{path: '', component: TiendaComponent},
	{path: '', redirectTo: 'tienda', pathMatch:'full'},
	{path: 'tienda', component: TiendaComponent},

	{path: 'home', component: HomeComponent},
	{path: 'animales', component: AnimalsComponent},
	{path: 'contacto', component: ContactComponent},
	{path: 'cuidadores', component: KeepersComponent},

	{path: '**', component: TiendaComponent},
	
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
