import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

createDb() {
  const products = [
    { id: 3, description: 'a thing', name: 'Thing', price: 4.99 },
    { id: 4, description: 'another thing', name: 'Thing 2', price: 4.99 },
    { id: 5, description: 'yet another thing', name: 'Third Thing', price: 6.99 },
    { id: 6, description: 'last thing', name: 'Thingished', price: 3.99 },
  ];
  return products;
}

  constructor() { }
}
