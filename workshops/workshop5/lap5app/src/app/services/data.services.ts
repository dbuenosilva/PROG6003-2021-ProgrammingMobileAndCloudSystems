

import { Injectable } from "@angular/core";
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonData } from './person.data';


@Injectable(
    {providedIn: 'root'})

export class DataService {
    
    constructor(private http: HttpClient ){
    
    }

    public getRecordByName(name:string): Observable<PersonData> {
        let url:string = "http://spike.scu.edu.au:8080/DataServ/";
        let observable1: Observable<PersonData> = this.http.get<PersonData>(url+name);

        return observable1;
    }

    public getAllRecords(): Observable<PersonData[]> {
        let url:string = "http://spike.scu.edu.au:8080/DataServ/";
        let observable1: Observable<PersonData[]> = this.http.get<PersonData[]>(url);

        return observable1;
    }

    public addRecord(record: PersonData): Observable<PersonData> {
        let url: string = "spike.scu.edu.au:8080/DataServ";
        let observable1 = this.http.put<PersonData>(url, record);
        return observable1;
    }

    public deleteRecordByName(name: string): Observable<PersonData> {
        let url: string = "spike.scu.edu.au:8080/DataServ";
        let observable1 = this.http.delete<PersonData>(url+name);
        return observable1;
    }

}
