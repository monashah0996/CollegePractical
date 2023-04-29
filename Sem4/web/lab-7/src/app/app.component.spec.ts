import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tasklist } from './app.component';

describe('TasklistComponent', () => {
  let component: Tasklist;
  let fixture: ComponentFixture<Tasklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tasklist ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tasklist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
