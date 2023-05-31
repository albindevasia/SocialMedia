import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  private darkThemeSubject = new Subject<boolean>();
  public darkTheme$ = this.darkThemeSubject.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    this.darkThemeSubject.next(isDarkTheme);
  }
}
