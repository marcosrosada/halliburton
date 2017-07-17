import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {

  employees: any = [
    { id: 1, name: 'Marcos Rosada', func: 'Front-End Developer', company: 'Halliburton' },
    { id: 2, name: 'Joziane Azevedo', func: 'Recursos humanos', company: 'Halliburton' },
    { id: 3, name: 'Mariane Almeida', func: 'Recursos humanos', company: 'Halliburton' },
    { id: 4, name: 'Raquel Fiuza de Azevedo', func: 'Recursos humanos', company: 'Halliburton' }
  ];

  constructor() { 
    //localStorage.setItem('employees', this.employees);
  }

  getEmployees() {
    return this.employees;
  }
}
