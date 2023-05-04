import { Component, OnDestroy, OnInit } from '@angular/core';
import { OriginalFilesService } from '../original-files.service';
import { Subscription } from 'rxjs';
import { SvgFileService } from '../svg-file.service';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent implements OnInit, OnDestroy {
  constructor(
    private originalFiles: OriginalFilesService,
    public svgFile: SvgFileService,
  ){}
  
  files: File[] = []
  ngOnInit()
  {
    console.log("FilePreview.init")
    this.originalFilesSubscription = this.originalFiles.observableFiles.subscribe((files) => {
      console.log("next()")
      this.files = files})
  }
  ngOnDestroy()
  {
    this.originalFilesSubscription?.unsubscribe?.()
  }
  originalFilesSubscription: Subscription |undefined
}
