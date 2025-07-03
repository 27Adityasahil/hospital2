import React from 'react'
import CommonBanner from '../components/CommonBanner'
import aboutImg from '../assets/images1/about-img.png'

import './About.css'
import { ChevronRight } from 'lucide-react'
import CentersOfExcellence from '../components/CentersOfExcellence'

function About() {
  return (
    <section className="about min-h-screen bg-gray-50">
        <CommonBanner 
        title="About Us"
        subtitle="Comprehensive healthcare services with expert medical professionals"
        backgroundImage="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <div className="about-section">
        <div className="left-about">
          <img src= {aboutImg} alt="about-Bimal Hospital" />
        </div>
        <div className="right-about">
          <h4>Welcome To Dr. Bimal Hospital Research Center Pvt. Ltd.</h4>
          <p>Dr. Bimal Hospital has the most modern world class facilities for Gastroenterology, Nephrology, Obst. & Gynecology. It has One Modular Operation Theater, One minor Operation Theater & One Emergency Operation Theater.</p>
          <p>The OT’s have World class OT Lights, Anaesthesia Ventilator, Central Suction & Central Gas Pipelines, One of the best Cautery & Vessel Sealers. Utmost planning for Operation Threater has been done for space utilisation for as this is divided in various Zones namely, Clean Zone, SemiSterile Zone, & Sterile Zone. A standard size CSSD (Sterlisation unit) fully equipped with Two Big size Horizontal Autoclaves, Flash Autoclave, ETO Sterliser, Ultrasonic Cleaner etc.</p>
          <p>The Operation Theater is backed up with Fully Equipped ICU & Post operative ward. At present it is 100 beded facility with hitech infrastructure. Offering clinical services in the field of super specility Gastroenterology, Nephrology, Obst. & Gynecology.</p>

          <div className="points">
            <ul>
              <li><ChevronRight /> 24/7 hours support</li>
              <li><ChevronRight /> Emergency Service</li>
            </ul>
            <ul>
              <li><ChevronRight /> 99% satisfaction</li>
              <li><ChevronRight /> Patient Centered Care</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="slider-section">
        <CentersOfExcellence />
      </div>

    </section>
  )
}

export default About