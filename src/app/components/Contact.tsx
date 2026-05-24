import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace this URL with your actual backend API endpoint
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Transmission failed');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form

      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="scroll-mt-32">
      <h2 className="font-press-start text-2xl md:text-3xl mb-12 uppercase text-white border-b-2 border-[#f5f0e1] pb-4 inline-block">
        &gt; Comms_Link
      </h2>

      <div className="flex flex-col gap-12">
        {/* Contact Form */}
        <div className="w-full border-2 border-[#f5f0e1] p-6 md:p-8 relative">
          <div className="absolute top-0 right-0 bg-[#f5f0e1] text-black font-press-start text-xs px-2 py-1">
            STATUS: SECURE
          </div>

          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-press-start text-xs uppercase text-gray-400 block">Identifier (Name)</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border-2 border-[#f5f0e1]/40 focus:border-[#f5f0e1] text-white p-3 font-vt323 text-xl outline-none transition-colors"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="font-press-start text-xs uppercase text-gray-400 block">Frequency (Email)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border-2 border-[#f5f0e1]/40 focus:border-[#f5f0e1] text-white p-3 font-vt323 text-xl outline-none transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="font-press-start text-xs uppercase text-gray-400 block">Transmission (Message)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-black border-2 border-[#f5f0e1]/40 focus:border-[#f5f0e1] text-white p-3 font-vt323 text-xl outline-none transition-colors resize-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#f5f0e1] text-black font-press-start text-sm md:text-base py-4 hover:bg-[#e8e0d0] transition-colors uppercase mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Transmitting...' : status === 'success' ? 'Transmission Successful' : status === 'error' ? 'Transmission Failed - Retry' : 'Transmit'}
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full border-2 border-[#f5f0e1] p-2">
          <div className="h-full min-h-[400px] bg-gray-900 relative">
            <iframe
              title="HQ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.0254109188513!2d72.83328527427116!3d19.064464682137764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e1!3m2!1sen!2sus!4v1779524550392!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(80%) invert(10%) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
