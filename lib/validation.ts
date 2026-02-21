import { ContactFormData, ContactFormErrors } from '@/types/contact';

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Name must be less than 100 characters';
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  // Subject validation
  if (!data.subject.trim()) {
    errors.subject = 'Subject is required';
  } else if (data.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters long';
  } else if (data.subject.trim().length > 200) {
    errors.subject = 'Subject must be less than 200 characters';
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  } else if (data.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>"'&]/g, (match) => {
    const entities: { [key: string]: string } = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '&': '&amp;'
    };
    return entities[match] || match;
  });
}