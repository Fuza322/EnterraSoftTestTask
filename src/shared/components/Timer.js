import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const _Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props?.width || '150px'};
  height: ${props => props?.height || '50px'};
  background-color: #333333;
  color: #FFFFFF;
  border-radius: 15px;
`;

const Timer = React.memo(function ({
  label,
  initialValue,
  timerEndAction,
  disabled,
  width,
  height,
}) {
  const [seconds, setSeconds] = useState(initialValue);
  const [isActive, setIsActive] = useState(disabled);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 1 && isActive) {
        setSeconds(time => time - 1);
      } else {
        clearInterval(timer);
        setIsActive(false);
        timerEndAction && timerEndAction();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, isActive]);

  const onClick = () => {
    setIsActive(true);
    setSeconds(initialValue);
  };

  return <_Timer onClick={!disabled ? onClick : undefined}
                 disabled={disabled}
                 $width={width}
                 $height={height}>
    {isActive ? seconds : label}
  </_Timer>;
});

Timer.propTypes = {
  label: PropTypes.string.isRequired,
  initialValue: PropTypes.number.isRequired,
  action: PropTypes.func,
  timerEndAction: PropTypes.func,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Timer;