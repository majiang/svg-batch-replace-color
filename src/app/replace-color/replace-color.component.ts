import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-replace-color',
  templateUrl: './replace-color.component.html',
  styleUrls: ['./replace-color.component.scss']
})
export class ReplaceColorComponent {
  @Input() originalColor: string = ""
}
