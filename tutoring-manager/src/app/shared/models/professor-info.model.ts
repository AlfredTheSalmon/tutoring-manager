import { UserStatus } from '../enum/user-status.enum';
import { UserBase } from './user-base.model';

export class ProfessorInfo extends UserBase {
  fullName: string;
  phone: number;
  address: string;
  email: string;
  status: UserStatus;
  lastLesson: string;
  joinedTs: string;
  iban: string;
}

export class ProfessorNote {
  noteTitle: string;
  noteBody: string;
}