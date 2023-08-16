import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflowerComponent } from './addflower.component';

describe('AddflowerComponent', () => {
  let component: AddflowerComponent;
  let fixture: ComponentFixture<AddflowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddflowerComponent]
    });
    fixture = TestBed.createComponent(AddflowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
