import {ComponentFixture, TestBed} from '@angular/core/testing'

import {ReplaceColorsComponent} from './replace-colors.component'

describe('ReplaceColorsComponent', () => {
  let component: ReplaceColorsComponent
  let fixture: ComponentFixture<ReplaceColorsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReplaceColorsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ReplaceColorsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
