import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  constructor(private route: ActivatedRoute, private serversService: ServersService, private router: Router) { }

  server!: {
    id: number,
    name: string,
    status: string
  };

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }

  onEdit() {
    // this.router.navigate(['servers', this.server.id.toString(), 'edit']); <-- not ok!
    this.router.navigate(['edit'], { relativeTo: this.route }); // <-- better! :)
  }

}
