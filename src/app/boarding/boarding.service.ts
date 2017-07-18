import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Boarding } from './boarding.model';
import { Employee } from './../employees/employee.model';
import { EmployeesService } from './../employees/employees.service';

@Injectable()
export class BoardingService {

  boardings: any = [
    new Boarding(1, new Employee(1, 'Marcos Rosada', 'Front-End Developer', 'Halliburton'), new Date(), new Date()),
    new Boarding(2, new Employee(3, 'Mariane Almeida', 'Gerente de Projetos', 'Petrobras'), new Date(), new Date())
  ];
  
  constructor(
      private employeesService: EmployeesService,
      private http: Http
    ) { }

  getBoardings() {
    /** 
     * Deveria realizar uma chamada REST do módulo http do Angular usando o verbo GET pra alimentar a lista de funcionários
    */
    return this.boardings;
  }

  createBoarding(boarding:Boarding) {
    /** 
     * Deveria realizar uma chamada REST do módulo http do Angular usando o verbo POST pra Salvar um funcionário
     * Para simular uma requisição, foi ultilizado um Client Testing Service 
    */
    this.http.post('https://httpbin.org/post', JSON.stringify(boarding))
      .map(res => res)
      .subscribe(dados => {
        // this.boardings.push(boarding);
      });

    this.boardings.push(boarding);
  }

}
