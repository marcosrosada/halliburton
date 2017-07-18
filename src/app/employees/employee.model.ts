export class Employee {
  
  id: number;
  name: string;
  func: string;
  company: string;

  constructor(_id: number, _name: string, _func: string, _company: string) {
    this.id = _id;
    this.name = _name;
    this.func = _func;
    this.company = _company;
  }
}