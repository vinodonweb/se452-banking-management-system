import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopmessageComponent } from './popmessage.component';

describe('PopmessageComponent', () => {
  let component: PopmessageComponent;
  let fixture: ComponentFixture<PopmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
