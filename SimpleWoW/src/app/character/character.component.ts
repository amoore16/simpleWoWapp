import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';
import { CharacterDBService } from '../shared/character-db.service'
import { Observable } from '../../../node_modules/rxjs';
import { Character } from './character';
import { DBcharacter } from '../shared/characterDB'

declare var M: any;


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [CharacterService, CharacterDBService]
})
export class CharacterComponent implements OnInit {
  
  gotData: boolean = false;
  chrAchieve: number;
  
  constructor(private characterService: CharacterService, private characterDBService: CharacterDBService) { }

  ngOnInit() {
    this.getDBcharacters();
    let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems);
  }

  getDBcharacters() {
    this.characterDBService.getCharacterList().subscribe((res) => {
      this.characterDBService.characters = res as DBcharacter[];
      this.apiCall(this.characterDBService.characters);
    });
  }

  apiCall(characters) {
    characters.forEach((char) => {
      this.characterService.character = char;
      if (this.characterService.character){
        this.characterService.getCharacterData().subscribe(data => {
          if (data) {
            this.handleData(data.body);
          }
        });
      }
    });
  }

  handleData(data) {
    console.log(data);
    this.chrAchieve = data.achievementPoints;
  }

  onDelete(_id: string) {
    if (confirm('Are you sure you wish to delete this Character?') ==true) {
      this.characterDBService.deleteCharacter(_id).subscribe((res) => {
        this.getDBcharacters();
        M.toast({ html: 'Deleted Successfully', classes: 'rounded' })
      });
    }
  }
  
}
