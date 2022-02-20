import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'renderer';

  async ping() {
    const sendMessage = 'Test Message';
    const result = await window.questApi.ping(sendMessage);
    console.log(result.pong);

    if (result.message === sendMessage) {
      console.log('Successed');
    }
  }
}
