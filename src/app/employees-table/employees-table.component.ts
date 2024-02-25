import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employees-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees-table.component.html',
  styleUrl: './employees-table.component.css'
})

export class EmployeesComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }
}
