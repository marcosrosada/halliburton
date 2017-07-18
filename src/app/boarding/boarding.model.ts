import { Employee } from './../employees/employee.model';

export class Boarding {

    id: number;
    employee: Employee;
    dtBoarding: Date;
    dtLanding: Date;

    constructor(_id: number, _employee: any, _dtBoarding: Date, _dtLanding: Date) {
        this.id = _id;
        this.employee = _employee;
        this.dtBoarding = _dtBoarding;
        this.dtLanding = _dtLanding;
    }
}