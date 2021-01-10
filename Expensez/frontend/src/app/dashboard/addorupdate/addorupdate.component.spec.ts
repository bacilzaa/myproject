import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorupdateComponent } from './addorupdate.component';

describe('AddorupdateComponent', () => {
  let component: AddorupdateComponent;
  let fixture: ComponentFixture<AddorupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
