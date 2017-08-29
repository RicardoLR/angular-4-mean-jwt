import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* agrego */
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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

import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';

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
        
    SimpleTinyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
