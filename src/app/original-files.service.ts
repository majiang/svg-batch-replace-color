import { Injectable } from '@angular/core';

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
  }
  private _files: File[] = []
}
