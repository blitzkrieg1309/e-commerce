import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcherComponent } from './archer.component';

describe('ArcherComponent', () => {
  let component: ArcherComponent;
  let fixture: ComponentFixture<ArcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
