import { Component ,OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  /*
  template:
   <h2>EmployeeList</h2>
    <ul *NgFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
    ,
    style:[]
    */
})
export class EmployeeListComponent implements OnInit {
  //public employees:string[]=[];
  public employees=[];
 

  constructor(private  _employeeservice:EmployeeService){}

    ngOnInit(){
      this._employeeservice.getEmployees()
        .subscribe(data => this.employees = data);
    }
  

}
