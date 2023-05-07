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

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
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
        this.pokemonMoves = [];
        for (let i = 0; i < this.maxMoves; i++) {
          const randomIndex = Math.floor(Math.random() * response.moves.length);
          this.pokemonMoves.push(response.moves[randomIndex]);
          response.moves.splice(randomIndex, 1);
        }
      });
    });
  }
}
