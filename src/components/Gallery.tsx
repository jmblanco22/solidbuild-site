import React from 'react'
import projects from '../data/projects.json'

type P = typeof projects[number]

const Gallery: React.FC = () => {
  const [active, setActive] = React.useState<P | null>(null)
  return (
    <section id="projects" className="section">
      <div className="text-center mb-8">
        <h2 className="h2">Project Showcase</h2>
        <p className="lead mt-2">Transforming spaces, one project at a time.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(p => (
          <button key={p.id} className="card overflow-hidden text-left" onClick={() => setActive(p)}>
            <img src={p.image} alt={p.title} loading="lazy" className="h-48 w-full object-cover" />
            <div className="p-4">
              <p className="text-sm text-brand-700">{p.category}</p>
              <h3 className="font-semibold">{p.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden">
            <img src={active.image} alt={active.title} className="w-full max-h-[70vh] object-contain bg-slate-100" />
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-brand-700">{active.category}</p>
                <h3 className="font-semibold">{active.title}</h3>
              </div>
              <button className="btn-secondary" onClick={()=>setActive(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
