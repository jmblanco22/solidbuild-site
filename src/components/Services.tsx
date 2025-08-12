import React from 'react'
import { Home, Building2, Hammer, ClipboardList } from 'lucide-react'

const services = [
  { icon: Home, title: 'Residential Construction', text: 'Beautiful, functional spaces for families.' },
  { icon: Building2, title: 'Commercial Projects', text: 'Built to last and support your business.' },
  { icon: Hammer, title: 'Renovations', text: 'We breathe new life into your property.' },
  { icon: ClipboardList, title: 'Project Management', text: 'On time and on budget with clear communication.' },
]

const Services: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-brand-700">Services</p>
        <h2 className="h2 mt-2">Our Comprehensive Construction Solutions</h2>
        <p className="lead mt-3 max-w-2xl mx-auto">
          From residential builds to large commercial projects, we ensure quality and efficiency.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(s => (
          <div key={s.title} className="card p-6">
            <s.icon className="mb-4" />
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="lead mt-2">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
