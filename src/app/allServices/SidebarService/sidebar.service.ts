import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  hidesidebar = new Subject <boolean>();
  constructor() { }
}
