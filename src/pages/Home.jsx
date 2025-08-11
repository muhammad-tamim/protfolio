import React from 'react';
import Hero from '../components/Home/Hero';
import AboutMe from '../components/Home/AboutMe';
import Footer from '../components/Home/Footer';
import ContactInfo from '../components/Home/ContactInfo';
import Experience from '../components/Home/Experience';
import Projects from '../components/Home/Projects';
import Skills from '../components/Home/Skills';
import Container from '../components/Container/Container';
import VerticalSpace from '../components/Container/VerticalSpace';
import Navbar from '../components/Home/Navbar';

const Home = () => {
    return (
        <Container>
            <VerticalSpace>
                <Navbar></Navbar>
            </VerticalSpace>

            <VerticalSpace>
                <Hero></Hero>
            </VerticalSpace>

            <VerticalSpace>
                <AboutMe></AboutMe>
            </VerticalSpace>

            <VerticalSpace>
                <Skills></Skills>
            </VerticalSpace>

            <VerticalSpace>
                <Projects></Projects>
            </VerticalSpace>

            <VerticalSpace>
                <Experience></Experience>
            </VerticalSpace>

            <VerticalSpace>
                <ContactInfo></ContactInfo>
            </VerticalSpace>

            <Footer></Footer>
        </Container>
    );
};

export default Home;