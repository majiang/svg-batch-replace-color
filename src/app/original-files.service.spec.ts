import {TestBed} from '@angular/core/testing'

import {OriginalFilesService} from './original-files.service'

describe('OriginalFilesService', () => {
  let service: OriginalFilesService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(OriginalFilesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
