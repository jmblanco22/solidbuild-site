import { Menu, X } from 'lucide-react'
import React from 'react'

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-pad h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-xl">SolidBuild</a>
        <nav className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary hidden md:inline-flex">Get a Quote</a>
        <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container-pad py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link" onClick={()=>setOpen(false)}>{l.label}</a>
            ))}
            <a href="#contact" className="btn-primary w-full mt-2" onClick={()=>setOpen(false)}>Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
