import { Component, OnInit } from '@angular/core';
import { Notepad } from '../notepad';
import { ActivatedRoute, Router } from '@angular/router';
import { NotepadService } from '../notepad.service';

@Component({
  selector: 'app-update-notepad',
  templateUrl: './update-notepad.component.html',
  styleUrls: ['./update-notepad.component.css']
})
export class UpdateNotepadComponent implements OnInit {

  id: number;
  notepad: Notepad;

  constructor(private route: ActivatedRoute,private router: Router,
    private notepadService: NotepadService) { }

  ngOnInit() {
    this.notepad = new Notepad();

    this.id = this.route.snapshot.params['id'];
    
    this.notepadService.getNotepad(this.id)
      .subscribe(data => {
        console.log(data)
        this.notepad = data;
      }, error => console.log(error));
  }

  updateNotepad() {
    this.notepadService.updateNotepad(this.id, this.notepad)
      .subscribe(data => console.log(data), error => console.log(error));
    this.notepad = new Notepad();
    this.gotoList();
  }

  onSubmit() {
    this.updateNotepad();    
  }

  gotoList() {
    this.router.navigate(['/notepads']);
  }
}
