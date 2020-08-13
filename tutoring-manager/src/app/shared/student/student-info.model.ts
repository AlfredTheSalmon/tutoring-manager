import { UserStatus } from '../enum/user-status.enum';

export class StudentInfo {
  id: string;
  name: string;
  age: number;
  genre: boolean; //1 = male; 0 = female
  phone: number;
  parent1: string;
  parent1genre: boolean;
  parent2: string;
  parent2genre: boolean;
  parentPhone: number;
  address: string;
  email: string;
  parentEmail: string;
  status: UserStatus;
  notes: string[];
}