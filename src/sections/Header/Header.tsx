import Image from 'next/image'
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
        </div>
        <h1 className="display-3 mb-4">Full Stack Developer</h1>
        <p className="lead mb-4">Building modern web applications with cutting-edge technologies</p>
        <a href="#about" className="btn btn-light btn-lg">Learn More</a>
      </div>
    </div>
  );
}