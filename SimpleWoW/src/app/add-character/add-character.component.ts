import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CharacterDBService } from '../shared/character-db.service';
import { Character } from '../shared/character.model';


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
  providers: [ CharacterDBService ]

})
export class AddCharacterComponent implements OnInit {

  constructor(private characterDBService: CharacterDBService) { }

  ngOnInit() {
  }

}
