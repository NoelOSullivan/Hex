import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonGroupComponent } from './hexagon-group.component';

describe('HexagonGroupComponent', () => {
  let component: HexagonGroupComponent;
  let fixture: ComponentFixture<HexagonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
