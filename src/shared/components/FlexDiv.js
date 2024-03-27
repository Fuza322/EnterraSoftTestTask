import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const _Div = styled.div`
  display: flex;
  flex-direction: ${props => props?.$columnDirection ? 'column' : 'row'};
  flex-wrap: nowrap;
  align-content: stretch;
  flex-shrink: 1;
  justify-content: ${props => props?.$justifyContent || 'flex-start'};
  align-items: ${props => props?.$alignItems || 'flex-start'};
  width: ${props => props?.width || '100%'};
  height: ${props => props?.height || '100%'};
`;

export const FlexDiv = (props) => {
  const {
    width,
    height,
    columnDirection,
    justifyContent,
    alignItems,
  } = props;

  return <_Div width={width}
               height={height}
               $columnDirection={columnDirection}
               $justifyContent={justifyContent}
               $alignItems={alignItems}>
    {props.children}
  </_Div>;
};

FlexDiv.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  columnDirection: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  children: PropTypes.node,
};