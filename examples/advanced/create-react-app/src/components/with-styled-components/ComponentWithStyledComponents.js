import React, { Component } from 'react';
import styled from 'styled-components';

import * as tokens from '../../style-dictionary-dist/variables.js';

const Box = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: `${tokens.SpacingMedium} auto 0`,
  padding: tokens.SpacingLarge,
  backgroundColor: tokens.ColorBackground,
  borderRadius: '10px',
});

const Description = styled.h3({
  margin: `0 0 ${tokens.SpacingSmall} 0`,
  fontSize: tokens.SizeTextLarge,
});

const WorkdayButton = styled.button`
  font-family: ${tokens.FontFamilyBase};
  font-size: ${tokens.SizeTextBase};
  line-height: normal;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid ${tokens.ColorBlackPepper600};
  border-radius: 4px;
  padding: ${tokens.SpacingXs} ${tokens.SpacingM};

  &:focus {
    border: 1px solid ${tokens.ColorBlueberry400};
  }

  &:hover {
    background-color: ${tokens.ColorBlackPepper100};
  }
`;

const WorkdayPrimaryButton = styled.button`
  font-family: ${tokens.FontFamilyBase};
  font-size: ${tokens.SizeTextBase};
  line-height: normal;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid ${tokens.ColorBlackPepper600};
  border-radius: 4px;
  padding: ${tokens.SpacingXs} ${tokens.SpacingM};
  background-color: ${tokens.ColorBlueberry400};
  color: ${tokens.ColorFrenchVanilla100};

  &:focus {
    border: 1px solid ${tokens.ColorBlueberry400};
  }

  &:hover {
    background-color: ${tokens.ColorBlueberry300};
  }
`;

const NetflixButton = styled.button`
  font-family: ${tokens.FontFamilyBase};
  font-size: ${tokens.SizeTextBase};
  line-height: normal;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid ${tokens.ColorCinnamon600};
  border-radius: 4px;
  padding: ${tokens.SpacingXs} ${tokens.SpacingM};

  &:focus {
    border: 1px solid ${tokens.ColorBlueberry400};
  }

  &:hover {
    background-color: ${tokens.ColorCinnamon300};
  }
`;

const NetflixPrimaryButton = styled.button`
  font-family: ${tokens.FontFamilyBase};
  font-size: ${tokens.SizeTextBase};
  line-height: normal;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid ${tokens.ColorCinnamon600};
  border-radius: 4px;
  padding: ${tokens.SpacingXs} ${tokens.SpacingM};
  background-color: ${tokens.ColorCinnamon600};
  color: ${tokens.ColorFrenchVanilla100};

  &:focus {
    border: 1px solid ${tokens.ColorBlueberry400};
  }

  &:hover {
    background-color: ${tokens.ColorCinnamon500};
  }
`;

class MyComponent extends Component {
  render() {
    return (
      <Box>
        <Description>Example uses Styled Components</Description>
        <div style={{ display: 'flex' }}>
          <WorkdayPrimaryButton style={{ float: 'left' }}>Workday</WorkdayPrimaryButton>
          <WorkdayButton style={{ float: 'right', marginLeft: '20px' }}>Workday</WorkdayButton>
          <NetflixPrimaryButton style={{ float: 'right', marginLeft: '20px' }}>Netflix</NetflixPrimaryButton>
          <NetflixButton style={{ float: 'right', marginLeft: '20px' }}>Netflix</NetflixButton>
        </div>
      </Box>
    );
  }
}

export default MyComponent;
