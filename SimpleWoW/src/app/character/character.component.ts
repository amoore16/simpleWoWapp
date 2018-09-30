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
    });
  }

  onClick(char) {
    this.characterService.character = char;
    if (this.characterService.character) {
      this.characterService.getCharacterData().subscribe(data => {
        if (data) {
          this.handleData(data.body);
        }
      });
    }
  }

  handleData(data) {
    console.log(data);
    this.chrAchieve = data.achievementPoints;
  }
  // getCharacterData () {
  //   this.characterService.getCharacterData()
  //   .subscribe(data => 
  //     this.characterData = data.body);
  //    //change observable maybe? 
  //    this.characterName = this.characterService.character.name;
  //    this.characterRealm = this.characterService.character.realm;
     
  //   }

    // logData() {
    //   console.log(this.characterData);
    //   this.showData = true;
    //   this.characterStatsFunction(this.characterData.stats);

    // }

    // characterStatsFunction(stats) {
    //   this.chrHealth = stats.health;
    //   this.chrMana = stats.power;
    //   this.chrInt = stats.int;
    //   this.chrStam = stats.sta;
    //   this.chrArmor = stats.armor;
    //   this.chrCrit = stats.crit;
    //   this.chrMastery = stats.mastery;
    //   this.chrVersatillity = stats.versatillity;
    // }
}
