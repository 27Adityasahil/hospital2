import React from 'react'
import CommonBanner from '../components/CommonBanner'
import gallerybg from '../assets/images1/header14.jpg'

function Gallery() {
  return (
    <>
    <CommonBanner
        title="Gallery"
        subtitle="Comprehensive healthcare services with expert medical professionals"
        backgroundImage={gallerybg}
      />
    <section className="gallery min-h-screen bg-gray-50 flex justify-center">
        
    </section>
    </>
  )
}

export default Gallery