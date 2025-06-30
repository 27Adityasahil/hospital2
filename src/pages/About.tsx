import React from 'react'
import CommonBanner from '../components/CommonBanner'

function About() {
  return (
    <section className="about min-h-screen bg-gray-50">
        <CommonBanner 
        title="About Us"
        subtitle="Comprehensive healthcare services with expert medical professionals"
        backgroundImage="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

    </section>
  )
}

export default About