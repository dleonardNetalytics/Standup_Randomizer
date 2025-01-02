import { Component, OnInit } from '@angular/core';
import Member from '../../dtos/member';
import { TeamMemberService } from '../../services/team-member.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainPanel } from '../mainpanel/main.panel';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  imports: [SidebarComponent, MainPanel],
})
export class MainLayoutComponent implements OnInit {
  members: Member[] = [];

  constructor(
    private teamMemberService: TeamMemberService
  ) {}

  ngOnInit(): void {
    this.fetchMembers();
  }

  fetchMembers() {
    this.teamMemberService.getMembers().subscribe({
      next: (data) => {
        this.members = data;
      },
      error: (error) => {
        console.error('Error fetching members', error);
      },
      complete: () => {
        console.log('Fetch members complete');
      },
    });
  }
}
