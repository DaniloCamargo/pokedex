import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { DexComponent } from './dex/dex.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'details/:name', component: PokemonDetailsComponent },
  { path: 'stats/:name', component: DexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    DexComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
