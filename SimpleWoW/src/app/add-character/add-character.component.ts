import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CharacterDBService } from '../shared/character-db.service';
import { DBcharacter } from '../shared/characterDB';

declare var M: any;

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
  providers: [CharacterDBService]

})
export class AddCharacterComponent implements OnInit {

  constructor(private characterDBService: CharacterDBService) { }

  ngOnInit() {
      this.resetForm();
      this.refreshCharacterList();
  }

  resetForm(form?: NgForm) {
    console.log('reset hit');
    if (form) {
      form.reset();
    }
    this.characterDBService.selectedCharacter = {
      _id: "",
      name: "",
      realm: "",
      locale: "",
    }
  }

  onSubmit(form: NgForm) {
    console.log('submit hit');
    if (form.value._id == "") {
      this.characterDBService.postCharacter(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCharacterList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.characterDBService.putCharacter(form.value).subscribe((res)=> {
        this.resetForm(form);
        this.refreshCharacterList();
        M.toast({ html: 'Updated successfully', classes: 'rounded '});
      });
    }
  }

  refreshCharacterList() {
    this.characterDBService.getCharacterList().subscribe((res) => {
      this.characterDBService.characters = res as DBcharacter[];
    });
  }

  onEdit(char: DBcharacter) {
    this.characterDBService.selectedCharacter = char;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure you wish to delete this Character?') ==true) {
      this.characterDBService.deleteCharacter(_id).subscribe((res) => {
        this.resetForm(form);
        this.refreshCharacterList();
        M.toast({ html: 'Deleted Successfully', classes: 'rounded' })
      });
    }
  }

}
