import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  teams: string[];
  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.teams = this.route.snapshot.data['teams'];
  }


}
