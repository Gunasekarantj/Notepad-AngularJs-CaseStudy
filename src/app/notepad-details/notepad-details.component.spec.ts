import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadDetailsComponent } from './notepad-details.component';

describe('NotepadDetailsComponent', () => {
  let component: NotepadDetailsComponent;
  let fixture: ComponentFixture<NotepadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotepadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
