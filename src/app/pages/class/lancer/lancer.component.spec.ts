import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancerComponent } from './lancer.component';

describe('LancerComponent', () => {
  let component: LancerComponent;
  let fixture: ComponentFixture<LancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LancerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
