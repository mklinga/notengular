import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModeToolbarComponent } from './view-mode-toolbar.component';

describe('ViewModeToolbarComponent', () => {
  let component: ViewModeToolbarComponent;
  let fixture: ComponentFixture<ViewModeToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModeToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
