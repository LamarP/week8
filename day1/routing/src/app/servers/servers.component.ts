import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor(private serversService: ServersService) { }

  servers: { id: number, name: string, status: string }[] = [];

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

}
