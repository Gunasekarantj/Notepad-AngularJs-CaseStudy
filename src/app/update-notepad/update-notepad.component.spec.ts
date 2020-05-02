import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotepadComponent } from './update-notepad.component';

describe('UpdateNotepadComponent', () => {
  let component: UpdateNotepadComponent;
  let fixture: ComponentFixture<UpdateNotepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNotepadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
