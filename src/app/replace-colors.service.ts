import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplaceColorsService {
  constructor() { }
  set original(originalColors: string[])
  {
    console.log(`replaceColors.original=${originalColors}`)
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
  async replace(file: File)
  {
    let content = await file.text()
    this._replacement.forEach((value, key) =>
      content = content.replace(key, value)
    )
    return content
  }
  update(original: string, replaced: string) {
    if (this._replacement.get(original) === undefined)
      throw new Error(`${original} not in replacement`);
    console.log(`${original} -> ${replaced}`)
    this._replacement.set(original, replaced)
  }
  private _replacement = new Map<string, string>();
}
