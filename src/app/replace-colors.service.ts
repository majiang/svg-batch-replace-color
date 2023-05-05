import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplaceColorsService {
  set original(originalColors: string[])
  {
    this._replacement = new Map(originalColors.map(
      originalColor => [originalColor,
        this._replacement.get(originalColor) ?? originalColor])
    )
    console.log(this.replacement)
  }
  get replacement()
  {
    return this._replacement
  }
  get observableReplacement()
  {
    return this.replacementSubject.asObservable()
  }
  async replace(file: File)
  {
    let content = await file.text()
    this._replacement.forEach((value, key) =>
      content = content.replace(key, value)
    )
    return new File([content], file.name, {type: "image/svg+xml"})
  }
  update(original: string, replaced: string) {
    if (this._replacement.get(original) === undefined)
      throw new Error(`${original} not in replacement`);
    console.log(`${original} -> ${replaced}`)
    if (this._replacement.get(original) === replaced)
      return
    this._replacement.set(original, replaced)
    this.replacementSubject.next(this._replacement)
  }
  private _replacement = new Map<string, string>();
  private replacementSubject = new Subject<Map<string, string>>
}
