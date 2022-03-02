import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { ViewerComponent } from './viewer/viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
