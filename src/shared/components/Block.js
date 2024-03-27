import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const _Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props?.width || '100px'};
  height: ${props => props?.height || '100px'};
  background-color: #45D5F5;
  ${props => props.$animated &&
    `animation: vertical 2.5s infinite alternate;
    @keyframes vertical {
      0% {transform: translateY(-100%);}
      100% {transform: translateY(100%);}
    }`};
`;

const Block = React.memo(function ({
  innerRef,
  animated,
  width,
  height,
  children,
}) {
  return <_Block ref={innerRef} $width={width} $height={height} $animated={animated}>{children}</_Block>;
});

Block.propTypes = {
  innerRef: PropTypes.object,
  content: PropTypes.string,
  animated: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
};

export default Block;