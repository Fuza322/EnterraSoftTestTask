import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const _Column = styled.div`
  display: flex;
  flex-direction: ${props => props?.$columnDirection ? 'column' : 'row'};
  flex-wrap: nowrap;
  align-content: stretch;
  flex-shrink: 1;
  justify-content: ${props => props?.$justifyContent || 'flex-start'};
  align-items: ${props => props?.$alignItems || 'flex-start'};
  width: ${props => props?.width || '100%'};
  height: ${props => props?.height || '100%'};
  margin: ${props => props?.$margin};
  padding: ${props => props?.$padding};
`;

export const FlexContainer = (props) => {
  const {
    width,
    height,
    columnDirection,
    justifyContent,
    alignItems,
    margin,
    padding,
  } = props;

  return <_Column width={width}
                  height={height}
                  $columnDirection={columnDirection}
                  $justifyContent={justifyContent}
                  $alignItems={alignItems}
                  $margin={margin}
                  $padding={padding}>
    {props.children}
  </_Column>;
};

FlexContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  columnDirection: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node,
};