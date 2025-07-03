import React from 'react';
import CommonBanner from '../components/CommonBanner';
import gallerybg from '../assets/images1/header14.jpg';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// Correct imports for ESM
import g1 from '../assets/gallery/g1.jpg';
import g2 from '../assets/gallery/g2.jpg';
import g3 from '../assets/gallery/g3.jpg';
import g4 from '../assets/gallery/g4.jpg';
import g5 from '../assets/gallery/g5.jpg';
import g6 from '../assets/gallery/g6.jpg';
import g7 from '../assets/gallery/g7.jpg';
import g8 from '../assets/gallery/g8.jpg';
import g9 from '../assets/gallery/g9.jpg';
import g10 from '../assets/gallery/g10.jpg';
import g11 from '../assets/gallery/g11.jpg';
import g12 from '../assets/gallery/g12.jpg';
import g13 from '../assets/gallery/g13.jpg';
import g14 from '../assets/gallery/g14.jpg';
import g15 from '../assets/gallery/g15.jpg';
import g16 from '../assets/gallery/g16.jpg';
import g17 from '../assets/gallery/g17.jpg';
import g18 from '../assets/gallery/g18.jpg';
import g19 from '../assets/gallery/g19.jpg';
import g20 from '../assets/gallery/g20.jpg';
import g21 from '../assets/gallery/g21.jpg';
import g22 from '../assets/gallery/g22.jpg';
import g23 from '../assets/gallery/g23.jpg';
import g24 from '../assets/gallery/g24.jpg';
import g25 from '../assets/gallery/g25.jpg';
import g26 from '../assets/gallery/g26.jpg';
import g27 from '../assets/gallery/g27.jpg';
import g28 from '../assets/gallery/g28.jpg';
import g29 from '../assets/gallery/g29.jpg';
import g30 from '../assets/gallery/g30.jpg';
import g31 from '../assets/gallery/g31.jpg';

const galleryImages = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25, g26, g27, g28, g29, g30, g31,
];


function Gallery() {
  return (
    <>
      <CommonBanner
        title="Gallery"
        subtitle="Comprehensive healthcare services with expert medical professionals"
        backgroundImage={gallerybg}
      />

      <section className="gallery min-h-screen bg-gray-50 p-8">
        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <PhotoView key={index} src={img}>
                <div className="bg-white shadow-md rounded overflow-hidden cursor-pointer hover:shadow-xl transition">
                  <img
                    src={img}
                    alt={`Gallery ${index}`}
                    className="w-full h-60 object-cover"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </section>
    </>
  );
}

export default Gallery;
