import { Injectable } from '@angular/core';
import { Character } from './character';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  private apiKey = environment.apiKey;
  private apiUrl: string;
  constructor(private http: HttpClient) { }

  character: Character = {
    name: '',
    realm: '',
    locale: ''
  };

  constructURL() {
    this.apiUrl = 'https://us.api.battle.net/wow/character/' + this.character.realm + '/' + this.character.name + '?fields=stats&locale=' + this.character.locale + '&apikey=' + this.apiKey ; 
  }

  getCharacterData (): Observable<any> {
    this.constructURL();
    return this.http.get(this.apiUrl, {observe: 'response'});
  }

  
}

