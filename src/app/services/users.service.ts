import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    // Se puede "re-tipar"
    // return this.httpClient.get(this.url) as Observable<User[]>;

    // Hacer petición y mapear el dato a estructura propia
    return this.httpClient.get(this.url).pipe(
      map((data) => {
        const users: User[] = [];

        const usersEnBruto = data as UserFromApi[];
        usersEnBruto.forEach((userEnBruto: UserFromApi) => {
          const newUser: User = {
            nombreDeUsuario: userEnBruto.name,
            correoElectronico: userEnBruto.email,
          };
          users.push(newUser);
        });

        return users;
      }
    ));
  }
}

// INTERFAZ CUSTOM PARA USAR EN LA APP
export interface User {
  nombreDeUsuario: string;
  correoElectronico: string;
}

// INTERFAZ DE DATOS QUE NOS DA LA API
export interface UserFromApi {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressFromApi;
  phone: string;
  website: string;
  company: CompanyFromApi;
}

export interface CompanyFromApi {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface AddressFromApi {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
