import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManetteComponent } from './manette.component';

describe('ManetteComponent', () => {
  let component: ManetteComponent;
  let fixture: ComponentFixture<ManetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
