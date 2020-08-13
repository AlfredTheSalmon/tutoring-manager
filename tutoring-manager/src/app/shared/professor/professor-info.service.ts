import { UserStatus } from '../enum/user-status.enum';

export class ProfessorInfo {
  id: string;
  name: string;
  age: number;
  genre: boolean;
  phone: number;
  iban: string;
  lastLesson: Date;
  joinedTs: Date;
  status: UserStatus;
  notes: string[];
}