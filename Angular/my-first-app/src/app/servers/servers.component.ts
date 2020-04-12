import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', you could select component by attribute
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  username = '';
  resetUserName = true;
  serverCreated = false;
  servers = ['testServer', 'testServer2'];
  clicksCount = [];
  showDetails = false;

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  display() {
    // this.clicksCount.push(this.servers.length);
    this.clicksCount.push(new Date());
    this.showDetails = !this.showDetails;
  }

  background() {
    return this.clicksCount.length >= 5 ? 'dodgerblue' : '';
  }

}
