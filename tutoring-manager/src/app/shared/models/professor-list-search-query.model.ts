import { UserStatus } from '../enum/user-status.enum';

export class ProfessorListSearchQuery {
  letter: string;
  gender: string;
  status: string;
  teachedSubject: string;
}