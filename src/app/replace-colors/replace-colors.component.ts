import { Component, OnDestroy, OnInit } from '@angular/core';
import { OriginalFilesService } from '../original-files.service';
import { Subscription } from 'rxjs';
import { ReplaceColorsService } from '../replace-colors.service';

@Component({
  selector: 'app-replace-colors',
  templateUrl: './replace-colors.component.html',
  styleUrls: ['./replace-colors.component.scss']
})
export class ReplaceColorsComponent implements OnInit, OnDestroy {
  constructor(
    private originalFiles: OriginalFilesService,
    public replaceColors: ReplaceColorsService,
    ){}
  ngOnInit()
  {
    this.originalFilesSubscription = this.originalFiles.observableFiles.subscribe((files) => {
      void Promise.all(
      files.map(file => file.text().then(text =>
        (text.match(/#[0-9A-Fa-f]{6}/g) ?? [])
        ))).then((aa) => {
          this.replaceColors.original = [... new Set(aa.flat())].sort()
        })
    })
  }
  ngOnDestroy()
  {
    this.originalFilesSubscription?.unsubscribe?.()
  }
  onChange({original, replaced}: {original: string, replaced: string})
  {
    this.replaceColors.update(original, replaced)
  }
  private originalFilesSubscription: Subscription | undefined
}
