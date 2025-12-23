import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-xl mx-auto bg-charcoal p-8 rounded-lg shadow-lg border border-charcoal-light">
      <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
      
      {/* Remember to replace YOUR_ID_HERE with your real formspree ID */}
      <form action="https://formspree.io/f/YOUR_ID_HERE" method="POST" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input type="text" name="name" id="name" required
            className="w-full px-4 py-2 bg-charcoal-dark border border-charcoal-light rounded-lg text-white focus:ring-2 focus:ring-accent outline-none"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input type="email" name="email" id="email" required
            className="w-full px-4 py-2 bg-charcoal-dark border border-charcoal-light rounded-lg text-white focus:ring-2 focus:ring-accent outline-none"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea name="message" id="message" rows="4" required
            className="w-full px-4 py-2 bg-charcoal-dark border border-charcoal-light rounded-lg text-white focus:ring-2 focus:ring-accent outline-none"
            placeholder="How can I help you?"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-accent text-charcoal-dark py-3 rounded-lg font-bold hover:bg-accent-hover transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;