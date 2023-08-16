import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditflowerComponent } from './editflower.component';

describe('EditflowerComponent', () => {
  let component: EditflowerComponent;
  let fixture: ComponentFixture<EditflowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditflowerComponent]
    });
    fixture = TestBed.createComponent(EditflowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
