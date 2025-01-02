import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Member from '../dtos/member';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  private apiUrl = `${environment.apiRoot}/TeamMember`;

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }
}

export default TeamMemberService;
