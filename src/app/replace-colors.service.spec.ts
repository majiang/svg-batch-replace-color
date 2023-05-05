import {TestBed} from '@angular/core/testing'

import {ReplaceColorsService} from './replace-colors.service'

describe('ReplaceColorsService', () => {
  let service: ReplaceColorsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ReplaceColorsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
