import { Notepad } from '../notepad';
import { Component, OnInit, Input } from '@angular/core';
import { NotepadService } from '../notepad.service';
import { NotepadListComponent } from '../notepad-list/notepad-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notepad-details',
  templateUrl: './notepad-details.component.html',
  styleUrls: ['./notepad-details.component.css']
})
export class NotepadDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['notepads']);
  }
}
