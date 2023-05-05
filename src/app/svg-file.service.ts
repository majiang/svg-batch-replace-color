import {Injectable} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'

@Injectable({
  providedIn: 'root',
})
export class SvgFileService {
  constructor(private sanitizer: DomSanitizer) {}
  url(file: File) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      URL.createObjectURL(file),
    )
  }
}
