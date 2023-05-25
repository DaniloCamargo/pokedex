import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((response: any) => {
      this.pokemonList = response.results;
      this.pokemonList.forEach((item) => {
        this.pokemonService.getPokemonDetails(item.name).subscribe((response: any) => {
          item.details = response;
          item.types = response.types;
        });
        this.pokemonService.getPokemonDetailsSpecies(item.name).subscribe((response: any) => {
          item.description = response.flavor_text_entries[1].flavor_text;
        });
        console.log(item);
      });
    });
  }
}
