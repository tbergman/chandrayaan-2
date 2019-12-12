import React from 'react';
import PropTypes from 'prop-types';

import Spaceship from './Spaceship';
import RocketThrust from './RocketThrust';
import Lights from './Lights';

function Rocket({ spaceshipRef, thrustRef, position, name }) {
  return (
    <group ref={spaceshipRef} position={position} name={name}>
      <Lights type='pointLight' color={0xffffff} position={[0, 80, 0]} />
      <Spaceship scale={[0.05, 0.05, 0.05]} />
      <RocketThrust />
    </group>
  );
}

Rocket.propTypes = {
  spaceshipRef: PropTypes.objectOf(PropTypes.any),
  thrustRef: PropTypes.objectOf(PropTypes.any),
  position: PropTypes.arrayOf(PropTypes.number),
  name: PropTypes.string
};

Rocket.defaultProps = {
  spaceshipRef: {},
  thrustRef: {},
  position: [],
  name: 'rocket'
};

export default Rocket;
