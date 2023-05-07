import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon';
  private readonly API_MOVE_URL = 'https://pokeapi.co/api/v2/move';

  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get(`${this.API_URL}?limit=151`);
  }

  getPokemonDetails(name: string) {
    return this.http.get(`${this.API_URL}/${name}`);
  }

  getPokemonDetailsMoves(flow: string) {
    return this.http.get(`${flow}`);
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
