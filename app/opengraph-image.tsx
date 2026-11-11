import { ImageResponse } from 'next/og'
 
export const alt = 'Angella Tendo Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111A3F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        {/* Profile Picture Container */}
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <img 
            src="https://tendo-angella-portfolio.vercel.app/angella.jpg" 
            alt="Angella Tendo"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              border: '4px solid #6EE7B7',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '20px' }}>
          <span style={{ fontSize: 24, color: '#6EE7B7', fontWeight: 'bold', letterSpacing: '2px', display: 'flex' }}>ANGELLA TENDO</span>
        </div>
        
        <div style={{ fontSize: 56, fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>Backend APIs that keep every client's data&nbsp;</span>
          <span style={{ color: '#6EE7B7' }}>safe</span>
          <span>.</span>
        </div>

        <div style={{ fontSize: 24, color: '#A9B1DD', marginTop: '40px', display: 'flex' }}>
          Python • Django • Django REST Framework
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}