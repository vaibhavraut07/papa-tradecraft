// Form Submission Service Configuration
// Using FormSubmit (https://formsubmit.co) - Free, unlimited submissions, no signup required

// Replace this with your email address where you want to receive form submissions
const FORM_SUBMIT_EMAIL = import.meta.env.VITE_FORM_SUBMIT_EMAIL || 'support@papatrading.in';

// FormSubmit endpoint
const FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`;

export interface LeadSubmissionData {
  name: string;
  phone: string;
  city: string;
  email: string;
  service?: string;
  message?: string;
  source: string;
  timestamp: string;
}

export async function submitLead(data: LeadSubmissionData): Promise<{ success: boolean; message: string }> {
  try {
    // Format the email body
    const emailBody = `
New ${data.source === 'enrollment_form' ? 'Enrollment' : 'Contact'} Form Submission

Name: ${data.name}
Phone: ${data.phone}
City: ${data.city}
Email: ${data.email}
${data.service ? `Service: ${data.service}` : ''}
${data.message ? `Message: ${data.message}` : ''}

Source: ${data.source}
Submitted: ${new Date(data.timestamp).toLocaleString()}
    `.trim();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', emailBody);
    formData.append('_subject', `New ${data.source === 'enrollment_form' ? 'Enrollment' : 'Contact'} Form Submission from ${data.name}`);
    formData.append('_template', 'table'); // Nice table format
    formData.append('_captcha', 'false'); // Disable captcha (can enable later)
    formData.append('_autoresponse', `Thank you ${data.name} for contacting PAPA TRADING! We'll get back to you soon.`); // Auto-reply

    const response = await fetch(FORM_SUBMIT_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.status}`);
    }

    const result = await response.json();
    
    return {
      success: true,
      message: 'Form submitted successfully',
    };
  } catch (error) {
    console.error('Error submitting lead:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
  }
}

