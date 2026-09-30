import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  readonly titles: string[] = [
    'FullStack Developer',
    'Product-first development',
    'B-Tech(Artificial Intelligence)',
  ];

  displayText = signal('');
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | undefined;

  ngOnInit(): void {
    this.typeEffect();
  }

  private typeEffect(): void {
    const currentTitle = this.titles[this.titleIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.displayText.set(currentTitle.substring(0, this.charIndex));
    } else {
      this.charIndex++;
      this.displayText.set(currentTitle.substring(0, this.charIndex));
    }

    let typingSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === currentTitle.length) {
      typingSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      typingSpeed = 500;
    }

    this.timer = setTimeout(() => this.typeEffect(), typingSpeed);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
