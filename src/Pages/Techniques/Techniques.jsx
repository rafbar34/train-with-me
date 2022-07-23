import React, {useEffect} from 'react';

import '../Techniques/Techniques.css';
import '../menu/menu.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {NavLink} from 'react-router-dom';
import deadlift from './exercises/deadlift.png';
import benchpress from './exercises/benchpress.png';
import squat from './exercises/squat.png';
import ohp from './exercises/ohp.jfif';
import pull from './exercises/chin-pull.png';
import {UIMenu} from '../../Components/UIMenu';

const Techniques = () => {
  useEffect(() => {
    Aos.init({duration: 1400});
  }, []);
  return (
    <div className='container-techniques'>
      <UIMenu />
      <section className='card-techniques'>
        <div className='deadlift cards' data-aos='fade-down'>
          <img className='' src={deadlift} alt='deadlift' />
        </div>
        <div
          className='deadlift-info cards'
          data-aos='fade-down'
          data-aos-delay='500'
        >
          <p>
            1. Stand with your feet wider than shoulder-width apart, and your
            toes pointing out at a 45° angle, rather than straight ahead.
          </p>
          <p>2. Bend at the hips to lower and grab the bar.</p>
          <p>
            3. Opt for whatever grip you normally use for a deadlift, whether
            that's overhand or a mixed grip, with one underhand and one
            overhand.Make sure your back is flat in this bottom position and be
            careful not to round it at any point during the exercise.
          </p>
          <p>
            4. Drive through your heels and extend your knees and hips to lift
            the bar to mid-thigh height.
          </p>
          <p>
            5. Pull your shoulders back at the top of the move, then carefully
            lower the bar back to the ground, still being mindful not to round
            your back.
          </p>
        </div>
        <div className='benchpress cards ' data-aos='fade-down'>
          <img src={benchpress} alt='deadlift' />
        </div>
        <div
          className='benchpress-info cards'
          data-aos='fade-down'
          data-aos-delay='500'
        >
          <p>
            1. Draw your shoulder blades back behind you to keep from pressing
            with rounded shoulders.
          </p>
          <p>
            2. Grasp the barbell using an overhand grip, placing your thumbs on
            the outside of your closed fist. Your arms are slightly wider than
            shoulder-width apart and the angle of your upper arms is about 45
            degrees to the body.
          </p>
          <p>
            3. Remove the barbell from the rack, locking your elbows. (Don't
            move the bar in an arc from the rack directly to the chest
            position.)
          </p>
          <p>
            4. Inhale while lowering the bar to your chest, at the nipple line.
          </p>
          <p>
            5. Exhale as you press the bar above your chest, extending your
            arms. Don't watch the bar—focus on the ceiling.
          </p>
          <p>
            6. Lower the bar so it is just above your chest. This is the
            starting position for the next bench press.
          </p>
        </div>
        <div className='ohp cards ' data-aos='fade-down'>
          <img src={ohp} alt='ohp' />
        </div>
        <div
          className='ohp-info cards'
          data-aos='fade-down'
          data-aos-delay='500'
        >
          <p>
            {' '}
            1. Stand with your body upright and core muscles braced, looking
            straight ahead.
          </p>
          <p>
            2. Hold the bar on your upper chest, gripping it with hands just
            wider than shoulder-width apart.
          </p>
          <p>
            {' '}
            3. Press the bar directly overhead. Don't tilt your hips forward
            during the move.
          </p>
        </div>
        <div className='pull-ups cards ' data-aos='fade-down'>
          <img src={pull} alt='pull ups' />
        </div>
        <div
          className='pull-ups-info cards'
          data-aos='fade-down'
          data-aos-delay='500'
        >
          <p>
            {' '}
            1. Start with your hands on the bar approximately shoulder-width
            apart with your palms facing forward.{' '}
          </p>

          <p>
            2. With arms extended above you, stick your chest out and curve your
            back slightly. That is your starting position.
          </p>

          <p>
            3. Pull yourself up towards the bar using your back until the bar is
            at chest level while breathing out.
          </p>

          <p>
            {' '}
            4. Slowly lower yourself to the starting position while breathing
            in. That is one rep.
          </p>
        </div>

        <div className='squat cards img-cards' data-aos='fade-down'>
          <img src={squat} alt='squat' />
        </div>
        <div
          className='squat-info cards'
          data-aos='fade-down'
          data-aos-delay='500'
        >
          <p>
            {' '}
            1. Stand with feet a little wider than hip width, toes facing front.
          </p>

          <p>
            2. Drive your hips back—bending at the knees and ankles and pressing
            your knees slightly open.
          </p>

          <p>
            3. Sit into a squat position while still keeping your heels and toes
            on the ground, chest up and shoulders back.
          </p>

          <p>
            4. Strive to eventually reach parallel, meaning knees are bent to a
            90-degree angle.
          </p>

          <p>
            5. Press into your heels and straighten legs to return to a standing
            upright position.
          </p>
        </div>
      </section>

      <footer className='footer'>
        Train with me<br></br>
        Copyright © 2022 - All Rigths reserved
      </footer>
    </div>
  );
};

export default Techniques;
