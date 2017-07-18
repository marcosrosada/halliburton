import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Employee } from './employee.model';

@Injectable()
export class EmployeesService {

  employees: any = [
    { id: 1, name: 'Marcos Rosada', func: 'Front-End Developer', company: 'Halliburton' },
    { id: 2, name: 'Joziane Azevedo', func: 'Recursos humanos', company: 'Halliburton' },
    { id: 3, name: 'Mariane Almeida', func: 'Recursos humanos', company: 'Halliburton' },
    { id: 4, name: 'Raquel Fiuza de Azevedo', func: 'Recursos humanos', company: 'Halliburton' }
  ];

  constructor(private http: Http) { }

  getEmployees() {
    /** 
     * Deveria realizar uma chamada REST do módulo http do Angular usando o verbo GET pra alimentar a lista de funcionários
    */
    return this.employees;
  }

  createEmployee(employee:Employee) {
    /** 
     * Deveria realizar uma chamada REST do módulo http do Angular usando o verbo POST pra Salvar um funcionário
     * Para simular uma requisição, foi ultilizado um Client Testing Service 
    */
    this.http.post('https://httpbin.org/post', JSON.stringify(employee))
      .map(res => res)
      .subscribe(dados => {
        
      });

      this.employees.push(employee);
  }
}
