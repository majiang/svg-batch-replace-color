import { Component } from '@angular/core';
import { OriginalFilesService } from '../original-files.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  constructor(private originalFiles: OriginalFilesService){}
  onFileSelected($event: Event)
  {
    const files = ($event?.target as HTMLInputElement).files
    if (files) this.originalFiles.files = files
  }
}
