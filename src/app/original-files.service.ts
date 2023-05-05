import {Injectable} from '@angular/core'
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class OriginalFilesService {
  set files(fileList: FileList) {
    this._files = []
    for (let i = 0; i < fileList.length; i++) {
      console.log(fileList[i].name)
      this._files.push(fileList[i])
    }
    this._files.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? +1 : 0,
    )
    this.filesSubject.next(this._files)
  }
  get observableFiles() {
    return this.filesSubject.asObservable()
  }
  _files: File[] = []
  private filesSubject = new Subject<File[]>()
}
