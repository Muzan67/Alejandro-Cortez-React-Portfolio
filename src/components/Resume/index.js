import React from "react";
import { Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <section>

      <h1 class="contact" style={{ textAlign: "center" }}>
        Programming Languages & Tools
      </h1>
      <br></br>
      <div class="technical-skills">
        <Row>
        <Col xs={6} md={4}>
            <h2 class="technical-skills" style={{ textAlign: "center" }}>
              Front-End Technologies
            </h2>
            <p style={{ textAlign: "center" }}>
              <li>
                <img
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/75/000000/external-html-5-mobile-app-development-flaticons-lineal-color-flat-icons.png"
                  alt="html5"
                  class="icon"
                />
              </li>
              <li>
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/75/000000/external-css-web-development-flaticons-flat-flat-icons.png"
                  alt="css3"
                  class="icon"
                />
              </li>
              <li>
                <img
                  src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/75/000000/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-duo-tal-revivo.png"
                  alt="jquery"
                  class="icon"
                />
              </li>
              <li>
                <img
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/75/000000/external-javascript-computer-programming-icons-flaticons-lineal-color-flat-icons-2.png"
                  alt="javascript"
                  class="icon"
                />
              </li>
              <li>
                <img
                  src="https://img.icons8.com/color/75/000000/bootstrap.png"
                  alt="bootstrap"
                  class="icon"
                />
              </li>
            </p>
          </Col>

          <Col xs={6} md={4}>
            <h2 class="technical-skills" style={{ textAlign: "center" }}>
              Back-End Technologies
            </h2>
            <p style={{ textAlign: "center" }}>
              <li>
                <img
                  src="https://img.icons8.com/color/75/000000/mysql-logo.png"
                  alt="mysql"
                  class="icon"
                />
              </li>
              <li>
                <img
                  src="https://img.icons8.com/color/75/000000/mongodb.png"
                  alt="mongodb"
                  class="icon"
                />
              </li>
              <li>
                <img
                  src="https://img.icons8.com/ultraviolet/75/000000/react--v1.png"
                  alt="react.js"
                  class="icon"
                />
              </li>
              <li>
                <img
                  src="https://img.icons8.com/color/75/000000/nodejs.png"
                  alt="node.js"
                  class="icon"
                />
              </li>
              <li>
                <img
                  src="https://img.icons8.com/color/75/000000/amazon-web-services.png"
                  alt="aws"
                  class="icon"
                />
              </li>
            </p>
          </Col>

          <Col xs={6} md={4}>
            <h1 class="education" style={{ textAlign: "center" }}>
              Education
            </h1>
            <p style={{ textAlign: "center" }}>
              Columbia University
              <br></br>
              Coding Bootcamp: Full Stack Web Developer
              <br></br>
              <br></br>
              French Culinary Institute
              <br></br>
              Classic Culinary Arts Diploma
              <br></br>
              <br></br>
              LaGuardia Commuity College
              <br></br>
              AA/BS Program in Liberal Arts / Secondary Education
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Resume;