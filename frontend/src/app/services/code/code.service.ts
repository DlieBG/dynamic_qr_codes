import { Injectable } from '@angular/core';
import { Code } from 'src/app/types/code.type';
import { Lane } from 'src/app/types/lane.type';
import { v4 as uuidv4 } from 'uuid';

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

  generateUrl(lane: Lane): string {
    return `${window.origin}/${lane.id}/${uuidv4()}`;
  }

}
