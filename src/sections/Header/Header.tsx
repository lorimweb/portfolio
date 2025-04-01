import Image from 'next/image'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Header() {
  return (
    <div className="hero bg-dark text-white min-vh-100 d-flex align-items-center">
      <div className="container text-center">
        <div className="mb-4">
          <Image
            src="/images/photo.png"
            alt="Profile Picture"
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid white'
            }}
            priority
          />
          <div className="social-icons mt-4 d-flex justify-content-center gap-4">
            <a href="mailto:your.email@example.com" className="text-white fs-4" aria-label="Email">
              <MdEmail />
            </a>
            <a href="https://linkedin.com/in/your-profile" className="text-white fs-4" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/your-username" className="text-white fs-4" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://wa.me/your-number" className="text-white fs-4" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <h1 className="display-3 mb-4">Full Stack Developer</h1>
        <p className="lead mb-4">Building modern web applications with cutting-edge technologies</p>
        <a href="#about" className="btn btn-light btn-lg">Learn More</a>
      </div>
    </div>
  );
}