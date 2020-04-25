import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ContactComponent implements OnInit {


  customers$: Observable<any[]>;
  customersRef: AngularFireList<any>;


  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    need: new FormControl('')
  });

  submitted: boolean ;

  teams: string[];
  constructor(private route: ActivatedRoute, db: AngularFireDatabase) {
    this.customersRef = db.list('customers');
    this.submitted = false;
    this.customers$ = this.customersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }

  ngOnInit() {
    this.teams = this.route.snapshot.data['teams'];
  }

    onSubmit(){
      this.customersRef.push({ details: this.contactForm.value });
      this.contactForm.reset();
      this.submitted = true;
      
    }
 

}

