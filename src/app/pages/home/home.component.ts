import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  pokemons: any;

  constructor(private pokeAPI: PokeApiService) {}

  async ngOnInit() {
    const result = await this.pokeAPI.getAll(151, 0);

    this.pokemons = result;
  }
}
