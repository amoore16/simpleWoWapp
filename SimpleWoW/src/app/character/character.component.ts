import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';
import { CharacterDBService } from '../shared/character-db.service'
import { Observable } from '../../../node_modules/rxjs';
import { Character } from './character';
import { DBcharacter } from '../shared/characterDB'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [CharacterService, CharacterDBService]
})
export class CharacterComponent implements OnInit {

  showData: boolean = false;
  characterData: any;
  characterName: string;
  characterRealm: string;
  characterStats: any;
  chrHealth: number;
  chrMana: number;
  chrInt: number;
  chrStam: number;
  chrArmor: number;
  chrCrit: number;
  chrHaste: number;
  chrMastery: number;
  chrVersatillity: number;

  constructor(private characterService: CharacterService, private characterDBService: CharacterDBService) { }

  ngOnInit() {
    this.getDBcharacters();
  }

  getDBcharacters() {
    this.characterDBService.getCharacterList().subscribe((res) => {
      this.characterDBService.characters = res as DBcharacter[];
    });
  }

  



  getCharacterData () {
    this.characterService.getCharacterData()
    .subscribe(data => 
      this.characterData = data.body);
     //change observable maybe? 
     this.characterName = this.characterService.character.name;
     this.characterRealm = this.characterService.character.realm;
     
    }

    logData() {
      console.log(this.characterData);
      this.showData = true;
      this.characterStatsFunction(this.characterData.stats);

    }

    characterStatsFunction(stats) {
      this.chrHealth = stats.health;
      this.chrMana = stats.power;
      this.chrInt = stats.int;
      this.chrStam = stats.sta;
      this.chrArmor = stats.armor;
      this.chrCrit = stats.crit;
      this.chrMastery = stats.mastery;
      this.chrVersatillity = stats.versatillity;
    }
}
