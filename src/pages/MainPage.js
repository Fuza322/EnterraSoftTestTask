import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlexDiv} from '../shared/components/FlexDiv';
import Block from '../shared/components/Block';
import Circle from '../shared/components/Circle';
import Button from '../shared/components/Button';
import Timer from '../shared/components/Timer';
import {formatToPixels, getHorizontalCenter, getVerticalCenter} from '../shared/assets/utils';

const MainPage = React.memo(function () {
  const animatedBlockRef = useRef(null);
  const circleRef = useRef(null);
  const blockRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const startAnimation = useCallback(() => {
    setDisabled(true);
    const animatedBlockPosition = animatedBlockRef.current.getBoundingClientRect();
    circleRef.current.style.top = formatToPixels(animatedBlockPosition.top);
    circleRef.current.style.left = formatToPixels(animatedBlockPosition.left);
    setIsMoving(true);
  }, [animatedBlockRef, setIsMoving]);

  const moveCircle = useCallback(() => {
    const blockPosition = blockRef.current.getBoundingClientRect();
    const circlePosition = circleRef.current.getBoundingClientRect();
    if ((getHorizontalCenter(circlePosition) >= getHorizontalCenter(blockPosition))
      && getVerticalCenter(circlePosition) >= getVerticalCenter(blockPosition)) {
      setIsMoving(false);
      return;
    }
    // horizontal moving
    if (getHorizontalCenter(circlePosition) < getHorizontalCenter(blockPosition)) {
      circleRef.current.style.left = formatToPixels(circlePosition.left + 3);
    }
    // vertical moving
    circleRef.current.style.top = getVerticalCenter(circlePosition) < getVerticalCenter(blockPosition)
      ? formatToPixels(circlePosition.top + 1)
      : formatToPixels(circlePosition.top - 1);
    requestAnimationFrame(moveCircle);
  }, [blockRef, circleRef, setIsMoving]);

  const timerEndAction = useCallback(() => {
    setDisabled(false);
  }, []);

  useEffect(() => {
    if (isMoving && disabled) {
      requestAnimationFrame(moveCircle);
    }
  }, [isMoving, disabled]);

  return <FlexDiv height={'100vh'} columnDirection>
    <FlexDiv flexDirection={'row'}
             alignItems={'center'}
             justifyContent={'space-around'}>
      <Block innerRef={animatedBlockRef} animated={true}>1</Block>
      <Circle innerRef={circleRef} disabled={isMoving}/>
      <Block innerRef={blockRef}>2</Block>
    </FlexDiv>
    <FlexDiv alignItems={'center'} justifyContent={'center'} height={'250px'}>
      <Button content={<Timer label={'START'} initialValue={5} timerEndAction={timerEndAction} disabled={disabled}/>}
              action={startAnimation}
              disabled={disabled}/>
    </FlexDiv>
  </FlexDiv>;
});

export default MainPage;