import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-replace-color',
  templateUrl: './replace-color.component.html',
  styleUrls: ['./replace-color.component.scss']
})
export class ReplaceColorComponent {
  @Input() originalColor!: string
  @Input() replacedColor!: string
  @Output() replacedColorChange = new EventEmitter<{original: string, replaced: string}>()
  colorPicker!: FormControl<string>
  onChange()
  {
    this.replacedColorChange.emit({
      original: this.originalColor,
      replaced: this.colorPicker.value,
    })
  }
  ngOnInit(){
    this.colorPicker = new FormControl(this.replacedColor, {nonNullable: true})
  }
}
