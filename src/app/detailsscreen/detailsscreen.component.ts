import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from '../services/httpservice.service';
@Component({
  selector: 'app-detailsscreen',
  templateUrl: './detailsscreen.component.html',
  styleUrls: ['./detailsscreen.component.css']
})
export class DetailsscreenComponent implements OnInit {
displayedColumns: string[] = ['Country', 'Confirmed', 'Recovered', 'Death'];
statecode:any;
results= [];
dataSource :any ;

constructor(private route:ActivatedRoute,private httpser:HttpserviceService,private http:HttpClient) { }
  ngOnInit(): void {
   this.statecode= this.route.snapshot.params['id'];
   this.getdistrictDetails();
  }
  getdistrictDetails(){
    this.httpser.getDistrict().subscribe(data=>{
       const a=(Object.values(data));
       a.forEach(e=>{
         if(e.statecode==this.statecode)
         {
           this.results=e.districtData;        
          const b=(Object.entries(e.districtData));
          this.dataSource=b; 
          console.log(b);         
         }         
       })    
    })   
  }
}
