import React from 'react';
import {useEffect} from 'react';
import './Home.css';
import {NavLink} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import imageCard3 from '../../images/kettlebell-gcac426b45_1280.jpg';
import imageCard2 from '../../images/man-g88710d72a_1280.jpg';
import imageCard1 from '../../images/man-g00f1bde15_1280.jpg';
import {UIMenu} from '../../Components/UIMenu';
const Home = () => {
  useEffect(() => {
    Aos.init({duration: 1400});
  }, []);

  return (
    <div className='home-container'>
      <UIMenu />
      <section className='layout-card'>
        <div className='title' data-aos='fade-down'>
          <p>
            Do You
            <p>Want </p> To
          </p>
        </div>
        <div className='triggle'></div>
        <div
          className='first-card'
          data-aos='fade-up'
          data-aos-anchor-placement='center-center'
        >
          <Card sx={{maxWidth: 545}}>
            <CardActionArea>
              <CardMedia component='img' height='190' image={imageCard1} />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  avoid stagnation?
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Many people are touched training stagnation in muscle building
                  and lack of improvement in athletic performance.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div
          className='second-card'
          data-aos='fade-up'
          data-aos-anchor-placement='center-center'
        >
          <Card sx={{maxWidth: 545}}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='190'
                image={imageCard2}
                alt='men'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  rise power ?
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Do you want to improve your sports performance by natural
                  ways?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div
          className='third-card'
          data-aos='fade-up'
          data-aos-anchor-placement='bottom-bottom'
        >
          <Card sx={{maxWidth: 545}}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='190'
                src={imageCard3}
                alt='men'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  more Satisfaction ?
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Training and diet are not enough to get success
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div
          className='end-card'
          data-aos='fade-up'
          data-aos-anchor-placement='bottom-bottom'
        >
          <span>
            {' '}
            <p>
              <b>
                {' '}
                If you anserws "Yes" on the all questions, i want to invite you
                to login on my website
              </b>
            </p>
          </span>
        </div>
      </section>
      <section className='about'>
        <div
          className='about-card'
          data-aos='fade-down'
          data-aos-anchor-placement='top-center'
        >
          <span className='about-card-text'>
            <h2>About webiste</h2>
            <h4>
              The site is designed to help you achieve better athletic
              performance and watch your training progression. On the site there
              is useful information on dietary information. I would like to
              invite you to register and try out the free program{' '}
            </h4>
          </span>
        </div>
      </section>
      <div className='space'></div>
      <footer className='footer'>
        Train with me<br></br>
        Copyright © 2022 - All Rigths reserved
      </footer>
    </div>
  );
};

export default Home;
