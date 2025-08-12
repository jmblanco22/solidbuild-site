import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="section grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="h1">Transforming Ideas into Exceptional Structures</h1>
        <p className="mt-4 lead max-w-prose">
          At SolidBuild Construction, we turn your vision into reality with precision and care.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="btn-primary">Get Quote</a>
          <a href="#services" className="btn-secondary">Learn More</a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="/images/cons14.jpeg" loading="lazy" className="rounded-2xl h-56 object-cover w-full" alt="project sample" />
        <img src="/images/cons15.jpg" loading="lazy" className="rounded-2xl h-56 object-cover w-full" alt="project sample" />
        <img src="/images/office.jpg" loading="lazy" className="rounded-2xl h-56 object-cover w-full" alt="project sample" />
        <img src="/images/cons16.jpg" loading="lazy" className="rounded-2xl h-56 object-cover w-full" alt="project sample" />
      </div>
    </section>
  )
}

export default Hero
