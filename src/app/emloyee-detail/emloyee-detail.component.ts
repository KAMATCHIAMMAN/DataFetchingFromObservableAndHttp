import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-emloyee-detail',
  templateUrl: './emloyee-detail.component.html',
  styleUrls: ['./emloyee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees=[];
  constructor(private  _employeeservice:EmployeeService){}

    ngOnInit(){
      this._employeeservice.getEmployees()
        .subscribe(data =>this.employees=data);
    }
  

}