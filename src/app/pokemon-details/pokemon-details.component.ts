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
  pokemonImage: string = '';
  pokemonDetails: any = {};
  pokemonMoves: any = {};
  maxMoves: number = 4;
  pokemonNext: number = 1;
  pokemonPrev: number = 2;
  segundoEl: any;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.segundoEl = this.pokemonMoves.length + 2;
    this.route.params.subscribe(params => {
      this.pokemonName = params['name'];
      this.pokemonService.getPokemonDetails(this.pokemonName).subscribe((response: any) => {
        this.pokemonDetails = response;

        this.pokemonImage = this.pokemonDetails.sprites.other['official-artwork'].front_default;

        this.pokemonService.getPokemonNext(response.id + 1).subscribe((response: any) => {
          this.pokemonNext = response.name;
        });

        this.pokemonService.getPokemonPrev(response.id - 1).subscribe((response: any) => {
          this.pokemonPrev = response.name;
        });

        this.pokemonService.getPokemonEggGroup(response.id).subscribe((response: any) => {
          this.pokemonDetails.egg_group = response;
        });

        this.pokemonMoves = [];
        for (let i = 0; i < this.maxMoves; i++) {
          var randomIndex = Math.floor(Math.random() * response.moves.length);
          var el = response.moves[randomIndex].move.url.split('/')[response.moves[randomIndex].move.url.split('/').length - 2];
          this.pokemonService.getPokemonDetailsMoves(el).subscribe((response: any) => {
            this.pokemonMoves.push(response);
            response.moves.splice(randomIndex, 1);
          });
        }
      });
    });
  }
}
