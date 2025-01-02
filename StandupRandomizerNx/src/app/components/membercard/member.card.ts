import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import Member from '../../dtos/member';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'member-card',
  templateUrl: 'member.card.html',
  styleUrl: 'member.card.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [FormsModule, NgIf],
})
export class MemberCard {
  @Input() member: Member | undefined;
  @Output() memberSelected = new EventEmitter<Member>();
  @Output() memberClick = new EventEmitter<unknown>();

  selectMember() {
    this.memberSelected.emit(this.member);
  }
}
