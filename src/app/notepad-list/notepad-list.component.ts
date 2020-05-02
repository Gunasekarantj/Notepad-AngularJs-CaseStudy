import { NotepadDetailsComponent } from '../notepad-details/notepad-details.component';
import { Observable } from "rxjs";
import { NotepadService } from "./../notepad.service";
import { Notepad } from "./../notepad";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-notepad-list",
  templateUrl: "./notepad-list.component.html",
  styleUrls: ["./notepad-list.component.css"]
})
export class NotepadListComponent implements OnInit {
  notepads: Observable<Notepad[]>;

  constructor(private notepadService: NotepadService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.notepads = this.notepadService.getNotepadsList();
  }

  deleteNotepad(id: number) {
    this.notepadService.deleteNotepad(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  notepadDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateNotepad(id: number){
    this.router.navigate(['update', id]);
  }
}
