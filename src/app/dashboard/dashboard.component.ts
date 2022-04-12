import { Component, OnInit } from '@angular/core';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  hotels: Observable<any> | undefined;
  public selectedHotel: any;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.hotels = this.apollo
      .watchQuery({
        query: GET_HOTELS,
      })
      .valueChanges.pipe(
        map((result: any) => {
          console.log(result.data.hotels);
          return result.data.hotels;
        })
      );
  }

  onSelect(selectedHotel: any): void {
    this.selectedHotel = selectedHotel;
    console.log(selectedHotel.hotel_name);
  }
}
