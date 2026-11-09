export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-2xl flex flex-col items-center mb-20">
      <h2 className="text-3xl font-bold mb-10 text-center relative pb-2 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full">Contact Me</h2>
      
      <div className="w-full bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-sm dark:shadow-lg">
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
          Have a question or want to work together? Send me a message directly using the form below.
        </p>
        
        <form action="mailto:rahmath123756@gmail.com" method="post" encType="text/plain" className="flex flex-col gap-5">
          <input 
            type="text" 
            name="Name" 
            required 
            placeholder="Your Name" 
            className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <input 
            type="text" 
            name="Subject" 
            required 
            placeholder="Subject" 
            className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <textarea 
            name="Message" 
            rows={5}
            required 
            placeholder="Your Message..." 
            className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-y"
          ></textarea>
          
          <button 
            type="submit" 
            className="mt-2 mx-auto px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors cursor-pointer"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </section>
  );
}