import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OriginalFilesService {
  constructor() { }
  set files(fileList: FileList){
    this._files = []
    for (let i = 0; i < fileList.length; i++)
    {
      console.log(fileList[i].name)
      this._files.push(fileList[i])
    }
    this.filesSubject.next(this._files)
  }
  get observableFiles()
  {
    return this.filesSubject.asObservable()
  }
  private _files: File[] = []
  private filesSubject: Subject<File[]> = new Subject<File[]>
}
