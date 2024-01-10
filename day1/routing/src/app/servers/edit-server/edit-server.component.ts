import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ServersService
} from '../servers.service';
import { CanComponentDeactivate } from './deactivate.guard';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {}
  server!: {
    id: number,
    name: string,
    status: string
  };
  serverName: string = '';
  serverStatus: string = '';
  changesSaved: boolean = false;

  // @HostListener('window:beforeunload', ['$event'])
  // event: any = ($event: any) => $event;

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  // ngOnDestroy() {
  //   console.log('check event');
  //   console.log(this.event);
  // }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });

    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('are you sure you want to discard the changes?');
    }
    return true;
  };
}
