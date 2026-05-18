import AboutContent from '@/modules/about/components/about-content'
import Footer from '@/modules/home/components/footer'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-32 pb-20 flex-1">
          <AboutContent />
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
