export class Employee {
  
  id: number;
  name: string;
  func: string;
  company: string;

  constructor(_id: number = null, _name: string = null, _func: string = null, _company: string = null) {
    this.id = _id;
    this.name = _name;
    this.func = _func;
    this.company = _company;
  }
}