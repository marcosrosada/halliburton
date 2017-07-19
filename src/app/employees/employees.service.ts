import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Employee } from './employee.model';

@Injectable()
export class EmployeesService {

  employees: any = [
      new Employee(1, 'Marcos Rosada', 'Arquiteto Front-End', 'Halliburton'),
      new Employee(2, 'Joziane Azevedo', 'Recursos humanos', 'Halliburton'),
      new Employee(3, 'Mariane Almeida', 'Gerente de Projetos', 'Petrobras'),
      new Employee(4, 'Lucas Benedito Fogatti Marinho', 'Desenvolvedor Back-End', 'Petrobras'),
      new Employee(5, 'Raquel Fiuza de Azevedo', 'Recursos humanos', 'Halliburton')
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
