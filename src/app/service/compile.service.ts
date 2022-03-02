import { Injectable } from '@angular/core';
import init, { InitOutput } from '../snow/snowflake_wasm';


@Injectable({
  providedIn: 'root'
})
export class CompileService {

  constructor() { }

  compile(source: string, seed: number, depth: number): Promise<InitOutput> {
    return init();
  }
}
