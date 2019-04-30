import { Component, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-app-error-handler',
  templateUrl: './app-error-handler.component.html',
  styleUrls: ['./app-error-handler.component.scss']
})
export class AppErrorHandlerComponent implements ErrorHandler {

  handleError(error) {
    
  }

}
