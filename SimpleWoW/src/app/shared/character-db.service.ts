import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from './characterDB';

@Injectable({
  providedIn: 'root',
})

export class CharacterDBService {
  
  selectedCharacter: Character;
  characters: Character[];
  readonly baseURL = 'http://localhost:1337/characters';

  constructor(private http: HttpClient) { }

  postCharacter(char: Character) {
    return this.http.post(this.baseURL, char);
  }

  getCharacterList() {
    return this.http.get(this.baseURL);
  }

  putCharacter(char: Character) {
    return this.http.put(this.baseURL + `/${char._id}`, char);
  }

  deleteCharacter(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
