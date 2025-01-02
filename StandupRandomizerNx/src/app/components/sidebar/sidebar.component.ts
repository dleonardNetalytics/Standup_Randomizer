import { Component, Input } from '@angular/core';
import Member from '../../dtos/member';
import { MemberCard } from '../membercard/member.card';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [MemberCard, NgForOf, NgIf],
})
export class SidebarComponent {
  title = 'Sidebar';
  @Input() collapsed!: boolean;
  @Input() members!: Member[];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  addMember() {}

  memberClick($event: any) {}
}
