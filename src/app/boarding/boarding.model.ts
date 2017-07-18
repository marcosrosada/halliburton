import { Employee } from './../employees/employee.model';

export class Boarding {
    id: number;
    employee: Employee;
    dtBoarding: Date;
    dtLanding: Date;
}