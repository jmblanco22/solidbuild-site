import React from 'react'
import testimonials from '../data/testimonials.json'

const Testimonials: React.FC = () => {
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])
  return (
    <section className="section bg-slate-50">
      <div className="text-center mb-10">
        <h2 className="h2">Customer Testimonials</h2>
        <p className="lead mt-2">SolidBuild exceeded expectations on every level.</p>
      </div>
      <div className="container-pad">
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className={"card p-6 transition-all " + (i === index ? "ring-brand-300" : "")}>
              <div className="flex gap-1" aria-label={`${t.rating} star rating`}>
                {Array.from({length: t.rating}).map((_,i)=>(<span key={i}>★</span>))}
              </div>
              <p className="mt-3 italic">"{t.quote}"</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="lead">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
