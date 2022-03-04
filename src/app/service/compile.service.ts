import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import init, { compile_and_run, create_document } from '../../assets/snow';


@Injectable({
  providedIn: 'root'
})
export class CompileService {

  constructor() { }

  compile(source: string, seed: number, depth: number): Observable<string> {
    console.log("Compiling", seed, depth, source);
    return from(init("assets/snow/snowflake_wasm_bg.wasm").then(() => {
      return compile_and_run(create_document(source, seed, depth));
    }));
  }
}
