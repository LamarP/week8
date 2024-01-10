import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  servers = [
    {
      id: 1,
      name: 'Live Server',
      status: 'online'
    },
    {
      id: 2,
      name: 'Guide Server',
      status: 'offline'
    },
    {
      id: 3,
      name: 'TP Server',
      status: 'offline'
    }
  ];

  getServers(): { id: number, name: string, status: string }[] {
    return this.servers;
  }

  getServer(id: number): any {
    return this.servers.find(s => s.id === id);
  }

  updateServer(id: number, serverInfo: { name: string, status: string }): void {
    const server = this.servers.find(s => s.id === id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
