# Form Submission Setup Guide (External Service)

This guide explains how to set up form submissions using **FormSubmit** - a free external service that requires no backend setup.

## Quick Setup (FormSubmit - Recommended)

### 1. Configure Email Address

Create a `.env` file in the `frontend` directory:

```env
VITE_FORM_SUBMIT_EMAIL=support@papatrading.in
```

**That's it!** FormSubmit works immediately - no signup required.

### 2. How It Works

- When users submit forms, FormSubmit sends emails directly to your configured email
- You'll receive formatted emails with all form data
- Users get an auto-reply confirmation email (optional)

### 3. Verify Email (One-time)

1. Submit a test form
2. Check your email inbox
3. Click the verification link in the email from FormSubmit
4. Done! All future submissions will work automatically

## Alternative: Formspree (More Features)

If you want more features like webhooks, spam protection, etc., use Formspree:

### Setup Steps:

1. **Sign up** at https://formspree.io (free tier available)
2. **Create a form** and get your form ID
3. **Update `.env`**:
   ```env
   VITE_FORMSPREE_ID=your-form-id-here
   ```
4. **Update `src/lib/api.ts`** to use Formspree endpoint

### Formspree Benefits:
- ✅ Spam protection
- ✅ Webhook support
- ✅ Form analytics
- ✅ Custom redirects
- ✅ File uploads

## Other Options

### EmailJS (Send Emails Directly)

1. Sign up at https://www.emailjs.com
2. Set up email service
3. Get Service ID, Template ID, and Public Key
4. Update forms to use EmailJS SDK

### Google Forms

1. Create a Google Form
2. Get the form action URL
3. Update forms to POST to Google Form URL

## Testing

1. Fill out the enrollment form or contact form
2. Submit the form
3. Check your email inbox (support@papatrading.in)
4. You should receive a formatted email with all the form data

## Email Format

You'll receive emails like this:

```
Subject: New Enrollment Form Submission from John Doe

New Enrollment Form Submission

Name: John Doe
Phone: 9876543210
City: Mumbai
Email: john@example.com
Service: mentorship-program
Message: I'm interested in learning more about trading.

Source: enrollment_form
Submitted: 1/15/2025, 2:30:45 PM
```

## Troubleshooting

### Emails Not Received

1. **Check spam folder** - First email might go to spam
2. **Verify email** - Click verification link in FormSubmit email
3. **Check email address** - Ensure `VITE_FORM_SUBMIT_EMAIL` is correct
4. **Check console** - Look for errors in browser console

### Form Not Submitting

1. **Check network tab** - See if request is being sent
2. **Check CORS** - FormSubmit handles CORS automatically
3. **Check email format** - Ensure email is valid format

## Production Notes

- FormSubmit is free and works in production
- No rate limits on free tier
- Emails are sent reliably
- Can add CAPTCHA later if needed (update form)

## Security

- FormSubmit includes basic spam protection
- For production, consider adding:
  - Google reCAPTCHA
  - Rate limiting (client-side)
  - Honeypot fields

## Support

- FormSubmit: https://formsubmit.co
- Formspree: https://formspree.io
- EmailJS: https://www.emailjs.com

For issues, contact: support@papatrading.in

