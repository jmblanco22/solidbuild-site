import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <p className="text-sm font-semibold text-brand-700">Connect</p>
        <h2 className="h2 mt-2">Get in Touch</h2>
        <p className="lead mt-3">We are here to answer your questions and provide support.</p>
        <form className="mt-8 space-y-4 max-w-lg" method="POST" action="https://formspree.io/f/your-id">
          <label className="block">
            <span className="block text-sm font-medium">Name</span>
            <input required name="name" className="mt-1 w-full rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 p-3 border" />
          </label>
          <label className="block">
            <span className="block text-sm font-medium">Email</span>
            <input required type="email" name="email" className="mt-1 w-full rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 p-3 border" />
          </label>
          <label className="block">
            <span className="block text-sm font-medium">Message</span>
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 p-3 border" />
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" required /> <span className="text-sm">I accept the terms</span>
          </label>
          <button className="btn-primary" type="submit">Submit</button>
        </form>
      </div>
      <img src="./images/contactme.jpg"/>
    </section>
  )
}

export default Contact
