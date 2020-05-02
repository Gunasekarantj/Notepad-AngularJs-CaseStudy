import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotepadComponent } from './create-notepad.component';

describe('CreateEmployeeComponent', () => {
  let component: CreateNotepadComponent;
  let fixture: ComponentFixture<CreateNotepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNotepadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
