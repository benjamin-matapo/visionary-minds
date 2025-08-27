# Formspree Setup Instructions

## Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create a New Form
1. After logging in, click "New Form"
2. Enter your email: `visionarymindsscholars@gmail.com`
3. Give your form a name: "Visionary Minds Contact Form"
4. Click "Create Form"

## Step 3: Get Your Form Endpoint
1. After creating the form, you'll see a form endpoint that looks like:
   `https://formspree.io/f/mnqkwxyz`
2. Copy this endpoint URL

## Step 4: Update the Code
1. Open `components/contact.tsx`
2. Find line 20: `const response = await fetch("https://formspree.io/f/YOUR_FORM_ID_HERE", {`
3. Replace `YOUR_FORM_ID_HERE` with your actual form ID from step 3
4. Save the file

## Step 5: Test the Form
1. Deploy your changes to Vercel
2. Visit your live site
3. Fill out and submit the contact form
4. Check your email (`visionarymindsscholars@gmail.com`) for the form submission

## Form Fields
The form includes these fields that will be sent to your email:
- **name** (required): Full name of the person
- **email** (required): Their email address
- **phone** (optional): Phone number
- **service** (required): Service they're interested in
- **message** (required): Their message/query

## Features Included
✅ **Success Message**: Shows a thank you message after successful submission
✅ **Error Handling**: Shows error message if submission fails
✅ **Form Validation**: Required fields are validated
✅ **Loading State**: Button shows "Sending..." while submitting
✅ **Form Reset**: Form clears after successful submission
✅ **Mobile Responsive**: Works perfectly on all devices

## Troubleshooting
- If emails aren't arriving, check your spam folder
- Make sure you've verified your email address with Formspree
- Check the browser console for any JavaScript errors
- Ensure the form endpoint URL is correct

## Alternative: Direct HTML Form (No JavaScript)
If you prefer a simpler approach without JavaScript, you can also use a direct HTML form that submits directly to Formspree. This is included in the `contact-simple.html` file.
