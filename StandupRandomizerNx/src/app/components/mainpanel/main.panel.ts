import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import Member from '../../dtos/member';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import {MemberDetailCard} from '../memberdetailcard/member.detail.card';

@Component({
  selector: 'main-panel',
  templateUrl: 'main.panel.html',
  styleUrl: 'main.panel.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgIf, NgClass, CommonModule, MemberDetailCard],
})
export class MainPanel implements OnInit {
  @Input() members!: Member[];
  selectedMember: Member | undefined = undefined;
  currentDateTime: string = '';
  isAnimating = false;
  allMembersSelected = false;
  sayings = [
    'Now determining randomization matrices...',
    'Opening random singularity point...',
    'Determining probabilistic indeterminants...',
    'Calculating quantum flux...',
    'Analyzing stochastic variables...',
    'Evaluating entropy levels...',
    'Simulating quantum entanglement...',
    'Measuring Heisenberg uncertainty...',
    'Predicting chaotic behavior...',
    'Assessing multiverse probabilities...',
  ];

  currentSayingIndex = 0;
  currentSaying = this.sayings[this.currentSayingIndex];

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime() {
    const now = new Date();
    const formattedDate = this.formatDate(now);
    const formattedTime = this.formatTime(now);
    this.currentDateTime = `${formattedDate} ${formattedTime}`;
  }

  formatDate(date: Date): string {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  formatTime(date: Date): string {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = `${hours}:${minutes}:${seconds}${ampm}`;
    return strTime;
  }

  getFormattedDateAndTime(): string {
    return this.currentDateTime;
  }

  btnNextClick() {
    this.isAnimating = true;
    this.cycleSayings();
    setTimeout(() => {
      this.selectRandomMember();
      this.isAnimating = false;
    }, 4000); // Wait for 3 seconds
  }

  cycleSayings() {
    let index = 0;
    const interval = setInterval(() => {
      this.currentSaying = this.sayings[index];
      index = (index + 1) % this.sayings.length;
      if (!this.isAnimating) {
        clearInterval(interval);
      }
    }, 1000); // Change saying every second
  }

  selectRandomMember(skipCurrent: boolean = false) {
    if (!skipCurrent && this.selectedMember !== undefined) {
      this.selectedMember.previouslySelected = true;
    }

    const availableMembers = this.members.filter(
      (member) => !member.previouslySelected && member.active,
    );
    if (availableMembers.length === 0) {
      this.selectedMember = undefined;
      this.allMembersSelected = true;
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableMembers.length);
    this.selectedMember = availableMembers[randomIndex];
  }

  btnSkipClick() {
    this.isAnimating = true;
    this.cycleSayings();
    setTimeout(() => {
      this.selectRandomMember(true);
      this.isAnimating = false;
    }, 4000); // Wait for 4 seconds
  }
}
