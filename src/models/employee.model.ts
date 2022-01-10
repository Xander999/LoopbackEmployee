import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Employee extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  empName: string;

  @property({
    type: 'number',
    required: true,
  })
  empDeptId: number;

  @property({
    type: 'string',
    required: true,
  })
  empAddress: string;

  @property({
    type: 'string',
    required: true,
  })
  empDesignation: string;

  @property({
    type: 'number',
    required: true,
  })
  empSalary: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
