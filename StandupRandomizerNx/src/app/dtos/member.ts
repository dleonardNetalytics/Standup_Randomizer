//typescript class for member
export default class Member {
  id: number;
  name: string;
  title: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
  bio?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  blog?: string;
  tags?: string[];
  active?: boolean;
  previouslySelected?: boolean;

  constructor() {
    this.id = 0;
    this.name = '';
    this.title = '';
    this.email = '';
    this.phone = '';
    this.imageUrl = '';
    this.bio = '';
    this.twitter = '';
    this.github = '';
    this.linkedin = '';
    this.blog = '';
    this.tags = [];
    this.active = true;
    this.previouslySelected = false;
  }
}
