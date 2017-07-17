import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {

  employees: any = [
    { id: 1, name: 'Marcos Rosada', func: 'Front-End Developer', company: 'Halliburton' },
    { id: 2, name: 'Joziane Azevedo', func: 'Recursos humanos', company: 'Halliburton' }
  ];

  constructor() { }

  getEmployees() {
    return this.employees;
  }
}
