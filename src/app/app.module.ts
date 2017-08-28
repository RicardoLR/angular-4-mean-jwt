import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* agrego */
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';

/** mis componentes 

ng g component new-module/new-component
*/
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent
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
