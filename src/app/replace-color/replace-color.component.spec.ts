import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceColorComponent } from './replace-color.component';

describe('ReplaceColorComponent', () => {
  let component: ReplaceColorComponent;
  let fixture: ComponentFixture<ReplaceColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaceColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaceColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
