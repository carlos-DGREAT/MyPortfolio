import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#932929]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#932929]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#932929]/10 text-[#932929] rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT COLUMN */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 h-full">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                
                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#932929]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#932929]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a href="tel:+639123456789" className="text-lg text-gray-800 font-medium hover:text-[#932929] transition-colors">
                      +63 (912) 345-6789
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#932929]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#932929]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:carlos@example.com" className="text-lg text-gray-800 font-medium hover:text-[#932929] transition-colors">
                      carlos@example.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#932929]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#932929]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-lg text-gray-800 font-medium">
                      Metro Manila, Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-sm text-gray-600">Available for freelance work</span>
                </div>
                <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Typically replies within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 h-full">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Send a Message</h3>
              <p className="text-gray-500 mb-6">Fill out the form below and I'll get back to you shortly.</p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700 animate-slideDown">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Message sent successfully! I'll respond within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all ${
                        focusedField === 'name'
                          ? 'border-[#932929] ring-4 ring-[#932929]/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all ${
                        focusedField === 'email'
                          ? 'border-[#932929] ring-4 ring-[#932929]/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all ${
                      focusedField === 'subject'
                        ? 'border-[#932929] ring-4 ring-[#932929]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all resize-none ${
                      focusedField === 'message'
                        ? 'border-[#932929] ring-4 ring-[#932929]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#932929] to-[#7a2222] hover:from-[#7a2222] hover:to-[#5e1919] text-white rounded-lg font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#932929]/30 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}