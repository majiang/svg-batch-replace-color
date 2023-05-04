import { Component, OnDestroy, OnInit } from '@angular/core';
import { OriginalFilesService } from '../original-files.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replace-colors',
  templateUrl: './replace-colors.component.html',
  styleUrls: ['./replace-colors.component.scss']
})
export class ReplaceColorsComponent implements OnInit, OnDestroy {
  constructor(private originalFiles: OriginalFilesService){}
  originalColors: string[] = []
  ngOnInit()
  {
    this.originalFilesSubscription = this.originalFiles.observableFiles.subscribe((files) => {
      Promise.all(
      files.map(file => file.text().then(text =>
        (text.match(/#[0-9A-Fa-f]{6}/g) ?? [])
        ))).then((aa) => this.originalColors = [... new Set(aa.flat())].sort())
    })
  }
  ngOnDestroy()
  {
    this.originalFilesSubscription?.unsubscribe?.()
  }
  private originalFilesSubscription: Subscription | undefined
}
