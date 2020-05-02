import { NotepadService } from '../notepad.service';
import { Notepad } from '../notepad';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-notepad',
  templateUrl: './create-notepad.component.html',
  styleUrls: ['./create-notepad.component.css']
})
export class CreateNotepadComponent implements OnInit {

  notepad: Notepad = new Notepad();
  submitted = false;

  constructor(private notepadService: NotepadService,
    private router: Router) { }

  ngOnInit() {
  }

  newNotepad(): void {
    this.submitted = false;
    this.notepad = new Notepad();
  }

  save() {
    this.notepadService.createNotepad(this.notepad)
      .subscribe(data => console.log(data), error => console.log(error));
    this.notepad = new Notepad();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/notepads']);
  }
}
