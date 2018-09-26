import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DBcharacter } from './characterDB';

@Injectable({
  providedIn: 'root',
})

export class CharacterDBService {
  
  selectedCharacter: DBcharacter;
  characters: DBcharacter[];
  readonly baseURL = 'http://localhost:1337/characters';

  constructor(private http: HttpClient) { }

  postCharacter(char: DBcharacter) {
    return this.http.post(this.baseURL, char);
  }

  getCharacterList() {
    return this.http.get(this.baseURL);
  }

  putCharacter(char: DBcharacter) {
    return this.http.put(this.baseURL + `/${char._id}`, char);
  }

  deleteCharacter(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
