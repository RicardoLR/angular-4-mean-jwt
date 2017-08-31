import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// para animaciones entre estados
// npm install --save @angular/animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* agrego */
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


/* Manejo de rutas */
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';

/** mis componentes 

ng g component components/contact
*/
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';


import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';



/** Cargamos mis modulos personalizados */
import { ModuloEmailModule } from './moduloemail/moduloemail.module';

import { ModuloAdminModule } from './moduloadmin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    ContactComponent,
    HomeComponent,
    AnimalsComponent,
    KeepersComponent,
    ReadMoreComponent,
        
    SimpleTinyComponent,
        
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BrowserAnimationsModule,

    routing,

    ModuloEmailModule,
    ModuloAdminModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
