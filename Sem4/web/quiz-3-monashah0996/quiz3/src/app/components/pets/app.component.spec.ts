import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pets } from './app.component';

describe('TasklistComponent', () => {
  let component: Pets;
  let fixture: ComponentFixture<Pets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pets ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
