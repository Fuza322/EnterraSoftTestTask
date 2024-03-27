import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const _Button = styled.button`
  width: ${props => props?.width || '150px'};
  height: ${props => props?.height || '50px'};
  background-color: #333333;
  color: #FFFFFF;
  opacity: ${props => props.disabled && 0.5};
  border-radius: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: ${props => !props.disabled ? 'pointer' : 'not-allowed'};
  appearance: none;

  &:hover {
    opacity: ${props => !props.disabled && 0.8};
    transition: 0.2s;
  }
`;

const Button = React.memo(function ({
  content,
  action,
  disabled,
  width,
  height,
}) {

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    action();
  };

  return <_Button onClick={(!disabled && typeof action === 'function') ? onClick : undefined}
                  disabled={disabled}
                  $width={width}
                  $height={height}>
    {content}
  </_Button>;
});

Button.propTypes = {
  content: PropTypes.node,
  action: PropTypes.func,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Button;