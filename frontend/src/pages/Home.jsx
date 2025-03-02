import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png'


const Home = () => {
  return <>
    <section>
      <container>
        <Row>
          <Col lg='6'>
          <div className='hero__content'>
            <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle Subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt=""></img>
            </div>
            <h1>
              Traveling opens the door to creating{" "}
              <span className='highlight'>memories</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quidem reiciendis alias! Eum omnis facilis maxime similique possimus, nam laudantium cupiditate debitis, vero nemo culpa explicabo dolor alias quo sapiente!
            </p>
          </div>
          </Col>
        </Row>
      </container>
    </section>
  </>
}

export default Home
