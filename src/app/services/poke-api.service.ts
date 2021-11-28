import { Injectable } from '@angular/core';

interface Poke {
  count: number;
  next: string;
  previous: string;
  results: [];
}

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url = 'https://pokeapi.co/api/v2/';

  constructor() {}

  getAll(limit: number, offset: number): Promise<any> {
    const params = `pokemon?limit=${limit}&offset=${offset}`;

    const pokeNumber = (url: string) => {
      return url
        .replace('https://pokeapi.co/api/v2/pokemon/', '')
        .replace('/', '');
    };

    return fetch(this.url + params).then(async (pokes: any) => {
      const pokemons = await pokes.json();
      return pokemons.results.map((res: any) => ({
        ...res,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNumber(
          res.url
        )}.svg`,
        number: pokeNumber(res.url),
      }));
    });
  }
}
