import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  //nasz zmienna emitowana miedzy komponentami
  sidebarSource$ = new Subject<boolean>();

  showSidebar(): void {
    this.sidebarSource$.next(true);
  }

  hideSidebar(): void {
    this.sidebarSource$.next(false);
  }
}
