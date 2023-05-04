import { Injectable } from '@angular/core';
import { Code } from 'src/app/types/code.type';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor() { }

  resolveCode(url: string): Code {
    return {
      lane_id: url.split('/')[3] || null,
      unique_part_id: url.split('/')[4] || null,
      same_origin: url.toLowerCase().startsWith(window.origin)
    };
  }

}
