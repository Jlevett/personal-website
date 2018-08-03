import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

import TitleSection from "./components/TitleSection.js"; //Single use component
import AboutSection from "./components/AboutSection.js"; //Single use component
import SkillsSection from "./components/SkillsSection.js"; //Repeating component
import SectionHeading from "./components/SectionHeading.js"; //Repeating component
import ProjectSection from "./components/ProjectSection.js"; //Repeating component
import OtherServices from "./components/OtherServices.js"; //Repeating component
import OutsideWork from "./components/OutsideWork.js"; //Repeating component
import ContactMe from "./components/ContactMe.js"; //Repeating component

import './App.css';
//import PropTypes from "prop-types";
import DownArrow from "./components/DownArrow.js";




class App extends Component{

    render(){
        return (
            <div>
              	<TitleSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectSection/>
                <OtherServices/>
                <OutsideWork/>
                <ContactMe/>
            </div>

        );
    };

}



export default App;



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGulp, faCss3Alt, faReact, faJs, faJava, faHtml5, faGit, faNpm} from '@fortawesome/free-brands-svg-icons';
// // for github etx

//https://hackernoon.com/improve-your-ux-by-dynamically-rendering-images-via-react-onload-393fd4d0d946
//https://pixabay.com/en/sea-water-holidays-blue-background-2755908/
//https://medium.freecodecamp.org/how-to-get-better-at-writing-css-a1732c32a72f