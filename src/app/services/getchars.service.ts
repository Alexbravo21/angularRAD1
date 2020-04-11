import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class GetcharsService {

    constructor(private httpClient: HttpClient) { }
    getChars(): Observable<Character[]> {
        return this.httpClient.get<Character[]>("http://localhost:3000/armory/characters");
    }

}
