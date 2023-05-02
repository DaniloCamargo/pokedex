import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get(`${this.API_URL}?limit=150`);
  }

  getPokemonDetails(name: string) {
    return this.http.get(`${this.API_URL}/${name}`);
  }
}
