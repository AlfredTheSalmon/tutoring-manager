import { UserStatus } from '../enum/user-status.enum';
import { UserBase } from './user-base.model';

export class StudentInfo extends UserBase {
  fullName: string;
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
  iban: string;
  notes: string[];
}