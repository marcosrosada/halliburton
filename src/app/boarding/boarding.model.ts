import { Employee } from './../employees/employee.model';

export class Boarding {

    id: number;
    employee: Employee;
    dtBoarding: Date;
    dtLanding: Date;

    constructor(_id: number = null, _employee: any = null, _dtBoarding: Date = null, _dtLanding: Date = null) {
        this.id = _id;
        this.employee = _employee;
        this.dtBoarding = _dtBoarding;
        this.dtLanding = _dtLanding;
    }
}