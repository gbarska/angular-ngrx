import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoggingService } from './logging.service';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  constructor(
    private store: Store<fromApp.AppState>,
    private loggingService: LoggingService
    
  ) {
    this.store.dispatch(new AuthActions.AutoLogin());
  }

  ngOnInit() {
    // this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
