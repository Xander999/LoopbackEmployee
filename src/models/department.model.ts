import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Department extends Entity {
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
  deptName: string;

  @property({
    type: 'string',
    required: true,
  })
  deptStrength: string;

  @property({
    type: 'number',
    required: true,
  })
  deptManagerId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Department>) {
    super(data);
  }
}

export interface DepartmentRelations {
  // describe navigational properties here
}

export type DepartmentWithRelations = Department & DepartmentRelations;
