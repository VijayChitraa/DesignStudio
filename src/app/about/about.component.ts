import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  teams: string[];
  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.teams = this.route.snapshot.data['teams'];
  }

  


}
