export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactFormState {
  data: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  errors?: ContactFormErrors;
}