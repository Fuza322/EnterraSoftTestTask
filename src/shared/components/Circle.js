import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const _Circle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: #65FC5B;
  border-radius: 100%;
  z-index: -1;
  ${props => !props?.disabled && 'display: none'}
`;

const Circle = React.memo(function ({innerRef, disabled}) {
  return <_Circle ref={innerRef} disabled={disabled}>&nbsp;</_Circle>;
});

Circle.propTypes = {
  innerRef: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Circle;