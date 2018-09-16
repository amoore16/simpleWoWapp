import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from './character.model';

@Injectable()
export class CharacterDBService {
  
  selectedCharacter: Character;
  characters: Character[];

  constructor() { }



}
