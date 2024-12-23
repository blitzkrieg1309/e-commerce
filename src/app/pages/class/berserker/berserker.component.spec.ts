import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerserkerComponent } from './berserker.component';

describe('BerserkerComponent', () => {
  let component: BerserkerComponent;
  let fixture: ComponentFixture<BerserkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BerserkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerserkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
