import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.css']
})
export class DexComponent {
  pokemonName: string = '';
  maxMoves: number = 4;
  pokemonID: number = 1;
  pokemonNextID: number = 2;
  pokemonPrevID: number = 1;
  pokemonDetails: any = {};
  pokemonMoves: any = {};

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemonID = Number(params['name']);
      this.pokemonService.getPokemonDetailsById(this.pokemonID).subscribe((response: any) => {
        this.pokemonDetails = response;
        this.pokemonNextID = (this.pokemonID + 1);
        this.pokemonPrevID = (this.pokemonID - 1);
      });
    });
  }

}
