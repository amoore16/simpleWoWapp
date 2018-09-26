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
    _id: '',
    name: '',
    realm: '',
    locale: ''
  };

  blizzUrl = 'https://us.api.battle.net/wow/character/' + this.character.realm + '/' + this.character.name + '?fields=stats&locale=' + this.character.locale + '&apikey=' + this.apiKey ; 

  getCharacterData (): Observable<any> {
    return this.http.get(this.blizzUrl, {observe: 'response'});
  }

  
}

