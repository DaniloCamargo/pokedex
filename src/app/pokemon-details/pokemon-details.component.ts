import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonName: string = '';
  pokemonDetails: any = {};

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemonName = params['name'];
      this.pokemonService.getPokemonDetails(this.pokemonName).subscribe((response: any) => {
        this.pokemonDetails = response;
      });
    });
  }
}
