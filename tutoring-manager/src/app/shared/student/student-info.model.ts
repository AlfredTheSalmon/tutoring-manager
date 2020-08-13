import { UserStatus } from '../enum/user-status.enum';

export class StudentInfo {
  id: string;
  name: string;
  fullName: string;
  age: number;
  gender: number; //1 = male; 0 = female
  phone: number;
  parent1: string;
  parent1gender: number;
  parent2: string;
  parent2gender: number;
  parentPhone: number;
  address: string;
  email: string;
  parentEmail: string;
  status: UserStatus;
  notes: string[];
}