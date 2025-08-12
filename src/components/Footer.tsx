import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="section border-t border-slate-200">
      <div className="grid lg:grid-cols-4 gap-10 items-start">
        <div>
          <p className="font-extrabold text-xl">SolidBuild</p>
          <p className="lead mt-2">Subscribe for updates on our services and projects.</p>
          <form className="mt-4 flex gap-2 max-w-md">
            <input className="flex-1 rounded-xl border p-3 border-slate-300" placeholder="Your email" />
            <button className="btn-primary">Join</button>
          </form>
        </div>
        <nav>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a className="nav-link" href="#home">Home</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#services">Services</a></li>
            <li><a className="nav-link" href="#projects">Projects</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <ul className="space-y-2">
            <li><a className="nav-link" href="mailto:info@solidbuild.com">info@solidbuild.com</a></li>
            <li><a className="nav-link" href="tel:+16122675345">+1 612 267 5345</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Policies</h4>
          <ul className="space-y-2">
            <li><a className="nav-link" href="#">Privacy Policy</a></li>
            <li><a className="nav-link" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-slate-500 mt-10">© 2025 SolidBuild. All rights reserved.</p>
    </footer>
  )
}

export default Footer
