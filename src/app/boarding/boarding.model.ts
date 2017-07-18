import { Employee } from './../employees/employee.model';

export class Boarding {
    constructor(id: number, employee: Employee, dtBoarding: Date, dtLanding: Date) {
        this.id = id;
        this.employee = employee;
        this.dtBoarding = dtBoarding;
        this.dtLanding = dtLanding;
    }

    id: number;
    employee: Employee;
    dtBoarding: Date;
    dtLanding: Date;
}