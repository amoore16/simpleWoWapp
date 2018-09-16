import { Injectable } from '@angular/core';
import { Character } from './character';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

//  

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiKey = 'ng3pcxmk57nk36wtsvfucg8f6hnj8e4m';

  constructor(private http: HttpClient) { }

  character: Character = {
    name: 'Ralor',
    realm: 'Aerie-Peak',
    region: 'en-US'
  };

  blizzUrl = 'https://us.api.battle.net/wow/character/' + this.character.realm + '/' + this.character.name + '?fields=stats&locale=' + this.character.region + '&apikey=' + this.apiKey ; 

  getCharacterData (): Observable<any> {
    return this.http.get(this.blizzUrl, {observe: 'response'});
  }
}

