import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedPkm = null;
  nameFilter = '';

  selectedPokemon(pkm){
    this.selectedPkm = pkm;
  }

  get pkmSprite(){
    const number = ("000" + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  get (){
    return this.pokeapiService.pokeList.filter(pokemon => {
        return pokemon.name.toLowerCase().indexOf(this.nameFilter) !== -1;
    })
  };

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    this.pokeapiService.listAll();
  }

}
