import { Component } from '@angular/core';
import { DataService } from './services/data.services';
import { PersonData } from './services/person.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lap5app';
  person: PersonData = new PersonData("", 0, "");
  people: Array<PersonData> = new Array<PersonData>();

  constructor( private service: DataService ) {

  }

  ngOnInit() { // leave here any initialisation task

    this.retrieveSingleRecord();

    // Peding to test and finishing developing:
    //this.retrieveSingleRecord();
    //this.deleteRecord();

  }

  public retrieveSingleRecord(){
    let name_to_get = "Prithwi";

    // How to consume the Observable
    this.service.getRecordByName(name_to_get).subscribe(
      (data) => { this.person = data; },
      (error) => { console.log("Error to request the data with name" + name_to_get) },
      () => {} )
  }

  public retrieveAllRecords() {

    this.service.getAllRecords().subscribe(
      (data) => { this.people = data; },
      (error) => { console.log("Error to request the data of all people" ) },
      () => {}
    )
  }

  public deleteRecord() {
    let name_to_delete = "Jacob";
    this.service.deleteRecordByName(name_to_delete).subscribe(
      (data) => {},
      (err) => {},
      () => {}
    );
  }

}
