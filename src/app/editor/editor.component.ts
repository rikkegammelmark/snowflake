import { Component, OnInit } from '@angular/core';
import { CompileService } from '../service/compile.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor(private compileService: CompileService) { }

  ngOnInit(): void {
  }

  compile(): void {
    this.compileService.compile(this.code, 1, 1);
    //this.compileService.compile(this.code, 1, 1).subscribe(result => console.log("Result", result))
  }
}
