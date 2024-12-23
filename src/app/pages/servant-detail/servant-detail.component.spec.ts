import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServantDetailComponent } from './servant-detail.component';

describe('ServantDetailComponent', () => {
  let component: ServantDetailComponent;
  let fixture: ComponentFixture<ServantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServantDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
