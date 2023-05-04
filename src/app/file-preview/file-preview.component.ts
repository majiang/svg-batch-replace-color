import { Component, OnDestroy, OnInit } from '@angular/core';
import { OriginalFilesService } from '../original-files.service';
import { Subscription } from 'rxjs';
import { SvgFileService } from '../svg-file.service';
import { ReplaceColorsService } from '../replace-colors.service';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver'

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
  replacedFiles: File[] = []
  initiateDownload()
  {
    let zip = new JSZip()
    this.replacedFiles.forEach(file => zip.file(file.name, file))
    zip.generateAsync({type: "blob"}).then(blob =>
      saveAs(blob, 'color-replaced.zip'))
  }
  replaceFiles()
  {
    this.files.map((file, i) =>
    this.replaceColor.replace(file).then((file) =>
      this.replacedFiles[i] = file
    ))
  }
  ngOnInit()
  {
    console.log("FilePreview.init")
    this.originalFiles.observableFiles.subscribe((files) => {
      this.files = files
      this.replacedFiles.length = files.length
      this.replaceFiles()
    })
    console.log(this.replaceColor)
    this.replaceColor.observableReplacement.subscribe(() => this.replaceFiles())
  }
  ngOnDestroy()
  {
    this.originalFilesSubscription?.unsubscribe?.()
    this.replaceColorSubscription?.unsubscribe?.()
  }
  private originalFilesSubscription: Subscription | undefined
  private replaceColorSubscription: Subscription | undefined
}
