export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Have a project, idea, or question?  
          Feel free to reach out — I’d love to connect.
        </p>
      </div>

      {/* Main Container */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* CONTACT INFO */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-base-content/20 flex flex-col gap-6">
          
          <div className="bg-gray-50 rounded-xl p-5 shadow-inner">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">carlos@example.com</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 shadow-inner">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">+63 9XX XXX XXXX</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 shadow-inner">
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">Philippines</p>
          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-base-content/20">
          <form className="flex flex-col gap-5">

            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="textarea textarea-bordered w-full mt-1"
              />
            </div>

            <button className="btn btn-primary mt-2">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}