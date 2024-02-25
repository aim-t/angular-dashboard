import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})

export class TopNavbarComponent {
  currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  employeeImageUrl: string = '';
  employeeName: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      if (employees.length >  0) {
        this.employeeImageUrl = employees[0].image;
        this.employeeName = employees[0].name;
      }
    });
  }

}

