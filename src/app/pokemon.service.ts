import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon';
  private readonly API_MOVE_URL = 'https://pokeapi.co/api/v2/move';
  private readonly API_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
  private readonly API_EGG_GROUP_URL = 'https://pokeapi.co/api/v2/egg-group';

  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get(`${this.API_URL}?limit=151`);
  }

  getPokemonDetails(flow: string) {
    return this.http.get(`${this.API_URL}/${flow}`);
  }

  getPokemonDetailsMoves(flow: string) {
    return this.http.get(`${this.API_MOVE_URL}/${flow}`);
  }

  getPokemonDetailsSpecies(flow: string) {
    return this.http.get(`${this.API_SPECIES_URL}/${flow}`);
  }

  getPokemonEggGroup(flow: string) {
    return this.http.get(`${this.API_EGG_GROUP_URL}/${flow}`);
  }

  getPokemonNext(flow: number) {
    return this.http.get(`${this.API_URL}/${flow}`);
  }

  getPokemonPrev(flow: number) {
    return this.http.get(`${this.API_URL}/${flow}`);
  }

  getPokemonDetailsById(flow: number) {
    return this.http.get(`${this.API_URL}/${flow}`);
  }
}
