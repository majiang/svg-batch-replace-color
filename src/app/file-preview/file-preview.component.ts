import { Component, OnDestroy, OnInit } from '@angular/core';
import { OriginalFilesService } from '../original-files.service';
import { Subscription } from 'rxjs';
import { SvgFileService } from '../svg-file.service';
import { ReplaceColorsService } from '../replace-colors.service';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent implements OnInit, OnDestroy {
  constructor(
    private originalFiles: OriginalFilesService,
    public svgFile: SvgFileService,
    private replaceColor: ReplaceColorsService,
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
  private originalFilesSubscription: Subscription |undefined
}
