import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ReactiveFormsModule} from '@angular/forms'

import {AngularSplitModule} from 'angular-split'

import {AppComponent} from './app.component'
import {FileUploadComponent} from './file-upload/file-upload.component'
import {FilePreviewComponent} from './file-preview/file-preview.component'
import {ReplaceColorsComponent} from './replace-colors/replace-colors.component'
import {ReplaceColorComponent} from './replace-color/replace-color.component'

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    FilePreviewComponent,
    ReplaceColorsComponent,
    ReplaceColorComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AngularSplitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
