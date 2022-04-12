import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Query for fetching all hotels
const GET_HOTELS = gql`
  {
    hotels {
      hotel_id
      hotel_name
      street
      city
      postal_code
      price
      email
      user_id
    }
  }
`;

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingPageComponent implements OnInit {
  @Input('data') data: any;
  hotels: Observable<any> | undefined;
  constructor() {}
  ngOnInit(): void {}
}
