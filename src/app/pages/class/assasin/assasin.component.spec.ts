import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssasinComponent } from './assasin.component';

describe('AssasinComponent', () => {
  let component: AssasinComponent;
  let fixture: ComponentFixture<AssasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssasinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
