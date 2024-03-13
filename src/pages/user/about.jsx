import React from 'react'
import NavBar from '../../components/navbar'
import AboutSection from '../../components/aboutUs'
import ProfessionalSection from '../../components/proSection'
import Footer from '../../components/footer'
import GalleryComponent from '../../components/team'

function about() {
    return (
        <div>
            <NavBar />
            <AboutSection />
            <ProfessionalSection />
            <GalleryComponent/>
            <Footer/>
        </div>
    )
}

export default about
