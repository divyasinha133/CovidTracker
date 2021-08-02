import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpserviceService } from '../services/httpservice.service';

@Component({
  selector: 'app-covidscreen',
  templateUrl: './covidscreen.component.html',
  styleUrls: ['./covidscreen.component.css']
})
export class CovidscreenComponent implements OnInit {
  displayedColumns: string[] = ['Country', 'Confirmed', 'Recovered', 'Death'];
  constructor(private httpser:HttpserviceService) { }
  li:any;
  results= [];
  resultsTname= [];
  Trecovered:any;
  Tconfirmed:any;
  Tdeath:any;
  dataSource :any ;
  ngOnInit(): void {
    this.httpser.getState().subscribe(Response => {
        this.li=Response;
       this.Trecovered=this.li.statewise[0].recovered; 
       this.Tdeath=this.li.statewise[0].deaths ;
       this.Tconfirmed=this.li.statewise[0].confirmed;
        this.results=this.li.statewise.slice(1);
        this.dataSource = this.results;
    });
  }
}
