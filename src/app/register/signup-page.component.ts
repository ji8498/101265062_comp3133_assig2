import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_USERS = gql`
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

// const CREATE_USER = gql`
//   mutation createQuote($id: String!, $first_name: String!, $last_name: String!, $email: String!, $password: String!) {
//     addUser(userInput: { user_id: $id, first_name: $firstname, last_name: $lastname, password: $password, email: $email }) {
//      user_id
//      firstname
//      lastname
//      password
//      email
//     }
//   }
// `;

const CREATE_USER = gql`
  mutation createUser(
    $id: String!
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userInput: {
        user_id: $id
        first_name: $firstname
        last_name: $lastname
        password: $password
        email: $email
      }
    ) {
      user_id
      firstname
      lastname
      password
      email
    }
  }
`;

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  create(
    user_id: string,
    first_name: string,
    last_name: string,
    password: string,
    email: string
  ) {
    this.apollo
      .mutate({
        mutation: CREATE_USER,
        refetchQueries: [{ query: GET_USERS }],
        variables: {
          first_name: first_name,
          last_name: last_name,
        },
      })
      .subscribe(() => {
        console.log('created');
      });
  }
}
