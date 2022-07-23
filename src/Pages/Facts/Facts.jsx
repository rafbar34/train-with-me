import React, {useEffect} from 'react';
import styles from './Facts-layout.module.css';
import '../menu/menu.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {NavLink} from 'react-router-dom';
import logoWebiste from '../../images/logo.png';
import { UIMenu } from '../../Components/UIMenu';
const Facts = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.container}>
       <UIMenu/>
      <section className={styles.layout}>
        <div className={styles.cards}>
          <div data-aos='fade-right'>
            <div className={styles.grettings}>
              <span className={styles.textSettings}>
                {' '}
                <p>
                  A diet high in antioxidants may reduce the risk of many
                  diseases (including heart disease and certain cancers).
                  Antioxidants scavenge free radicals from the body cells and
                  prevent or reduce the damage caused by oxidation. The
                  protective effect of antioxidants continues to be studied
                  around the world. Broccoli, spinach, carrots and potatoes are
                  all high in antioxidants, and so are artichokes, cabbage,
                  asparagus, avocados, beetroot, radish, lettuce, sweet
                  potatoes, squash, pumpkin, collard greens and kale. Using lots
                  of spices in cooking is good.
                </p>{' '}
              </span>
              <div
                className={`${styles.imageSettings} ${styles.imageapple}`}
                alt='apple'
              ></div>
            </div>
          </div>
          <div data-aos='fade-left'>
            <div className={styles.grettings}>
              <div
                className={`${styles.imageCrossfit} ${styles.imageSettings}`}
                alt='crossfit'
              ></div>
              <span className={styles.textSettings}>
                <p>
                  Protein is an important part of a healthy diet. Proteins are
                  made up of chemical 'building blocks' called amino acids. Your
                  body uses amino acids to build and repair muscles and bones
                  and to make hormones and enzymes. They can also be used as an
                  energy source. We have to eat 15% kcal in diet from proteins
                </p>
                <p>Good Protein Sources:</p>
                <li>Seafood.</li>
                <li>White-Meat Poultry.</li>
                <li>Milk, Cheese, and Yogurt.</li>
                <li>Eggs.</li>
                <li>Beans.</li>
                <li>Pork Tenderloin.</li>
                <li>Soy.</li>
                <li>Lean Beef.</li>
              </span>
            </div>
          </div>
          <div data-aos='fade-right'>
            <div className={styles.grettings}>
              <span className={styles.textSettings}>
                {' '}
                <p>
                  Drinking too much energy drinks can raise your blood pressure
                  and heart rate, and cause anxiety and insomnia. Drinking them
                  over the long term can raise your risks for heart disease.
                  Getting too much sugar can lead to weight gain, and put you at
                  risk for diabetes. Better choose coffe. Coffe has more
                  poliphenols, which influence to be healthy.
                </p>{' '}
              </span>
              <div
                className={`${styles.imageFitness} ${styles.imageSettings}`}
              ></div>
            </div>
          </div>
          <div data-aos='fade-left'>
            <div className={`${styles.grettings} ${styles.endInfo}`}>
              <span className={styles.endInfo}>
                {' '}
                <span className={styles.remember}>
                  <p>Remember</p>
                </span>
                <p>
                  Trening is not enough to be strong and healthy. Dont forget
                  about diet. we are what we eat. its very important to achieve
                  the result.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer'>
        Train with me<br></br>
        Copyright © 2022 - All Rigths reserved
      </footer>
    </div>
  );
};

export default Facts;
