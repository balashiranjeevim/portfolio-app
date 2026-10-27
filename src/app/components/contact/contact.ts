import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icon } from '../ui/icon/icon';

@Component({
  imports: [FormsModule, Icon],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  readonly emailAddress = 'balashiranjeevim@gmail.com';
  readonly githubUrl = 'https://github.com/balashiranjeevim';
  readonly linkedinUrl = 'https://linkedin.com/in/balashiranjeevi';

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isCopied = signal(false);
  isSubmitted = signal(false);
  errorMessage = signal('');

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.emailAddress).then(() => {
        this.isCopied.set(true);
        setTimeout(() => this.isCopied.set(false), 2500);
      });
    } else {
      this.isCopied.set(true);
      setTimeout(() => this.isCopied.set(false), 2500);
    }
  }

  onSubmit(): void {
    if (
      !this.formData.name.trim() ||
      !this.formData.email.trim() ||
      !this.formData.message.trim()
    ) {
      this.errorMessage.set('Please fill out all required fields.');
      return;
    }

    this.errorMessage.set('');
    this.isSubmitted.set(true);

    const subject = encodeURIComponent(
      this.formData.subject.trim() || `Portfolio Inquiry from ${this.formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`,
    );

    if (typeof window !== 'undefined') {
      window.open(`mailto:${this.emailAddress}?subject=${subject}&body=${body}`, '_blank');
    }
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    this.isSubmitted.set(false);
    this.errorMessage.set('');
  }
}
