import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center gap-3 text-brand-700 mb-3">
          <span className="text-2xl">🛠️</span>
          <span className="font-semibold">About Us</span>
        </div>
        <h2 className="h2">Meet Our Dedicated SolidBuild Team</h2>
        <p className="lead mt-4 max-w-prose">
          We pride ourselves on commitment to quality, safety, and timely project completion.
          Our skilled team brings years of experience to transform your vision into reality.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="btn-primary">Contact</a>
          <a href="#services" className="btn-secondary">Learn More</a>
        </div>
      </div>
      <img src="/images/conspic.jpg" alt="Our Team" loading="lazy" className="rounded-2xl w-full h-80 object-cover" />
    </section>
  )
}

export default About
