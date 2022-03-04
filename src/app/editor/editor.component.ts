import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { nonNegativeIntegerValidator } from '../misc/validators';
import { CompileService } from '../service/compile.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Output() result = new EventEmitter<string>();

  editorOptions = {theme: 'vs-dark', language: ''};
  seed = new FormControl(1, [Validators.required, nonNegativeIntegerValidator]);
  depth = new FormControl(10, [Validators.required, nonNegativeIntegerValidator]);
  code: string = `system test using turtle {

  start {
    forward(200.0)
    turn(240.0)
    forward(200.0)
    turn(240.0)
    forward(200.0)
  }

  rule forward if length > 5.0 {
    let d = length / 3.0
    forward(d)
    turn(60)
    forward(d)
    turn(-120)
    forward(d)
    turn(60)
    forward(d)
  }

}
`

  constructor(private compileService: CompileService) { }

  ngOnInit(): void {
  }

  compile(): void {
    this.compileService.compile(this.code, this.seed.value, this.depth.value).subscribe(result => {
      this.result.emit(result);
    })
  }

  getErrorMessage(value: FormControl): string {
    if (value.hasError('required')) {
      return 'You must enter a value';
    }
    if (value.hasError('invalid')) {
      return 'Must be non-negative integer';
    }
    return 'An error has occured';
  }
}
