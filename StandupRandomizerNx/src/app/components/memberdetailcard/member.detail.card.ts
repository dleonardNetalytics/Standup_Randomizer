import { Component, Input } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import member from '../../dtos/member';

@Component({
  selector: 'member-detail-card',
  templateUrl: 'member.detail.card.html',
  styleUrls: ['member.detail.card.css'],
  imports: [
    NgOptimizedImage
  ]
})
export class MemberDetailCard {
  @Input() selectedMember: member | undefined

}
