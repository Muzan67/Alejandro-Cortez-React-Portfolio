import React from "react";
import myBioPic from '../../assets/images/Bio-Pic-S.jpeg'
import { Col } from 'react-bootstrap';

function About() {
  return (

    <section className="">

    <div className="row justify-content-center" id="about-container">
      <Col lg={6} md={12}>
      <br></br>
      <br></br>
        <center><img src={myBioPic} className="my-image" alt="alejandro-profile"/></center>
      <br></br>
      <h1 class="name" style={{textAlign:"center"}}  >Alejandro Cortez</h1>
      <h2 class="title" style={{textAlign:"center"}} >Full Stack Web Developer</h2>
      <h3 class="bio" style={{textAlign:"center"}}>Welcome to my profile</h3>
      <br></br>
      <p style={{textAlign:"center"}}>
        I am a descendent of Mexican parents, a born and raised native of NYC.
      <br></br>
      <br></br>
        Currently the Director of Dining Operations for the Guggenheim Museum. I
        am a graduate of the French Culinary Institute and have been working in
        the Restaurant / Hospitality industry for over 19 years.
      <br></br>
      <br></br>
        As someone who's always loved technology and wondered about the intricacies
        behind them, I decided to take the leap and start a new journey and
        career path.
      <br></br>
      <br></br>
        I have enrolled in Columbia University's Engineering Coding Boot Camp to
        transition as a Full-Stack Software Engineer. The knowledge and
        experience I am developing in this bootcamp will provide the
        fundamentals to the vast array of technologies, languages, frameworks,
        and the processes behind them.
      <br></br>
      <br></br>
        I am excited to start this incredible journey to grow in the tech-industry
        and acheive my end goal in a blossoming career in as a Full Stack Web Developer.
      <br></br>
      <br></br>
      <br></br>
      </p>
      </Col>

    </div>
    </section>
  )}

export default About;
