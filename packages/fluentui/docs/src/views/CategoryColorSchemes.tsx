import * as React from 'react';
import DocPage from '../components/DocPage/DocPage';
import GuidesNavigationFooter from '../components/GuidesNavigationFooter';
import CategoryColorSchemes from '../components/CategoryColorSchemes';

import {
  Dropdown,
  Flex,
  Provider,
  teamsHighContrastTheme,
  teamsDarkTheme,
  teamsTheme,
} from '@fluentui/react-northstar';
import { faderStyles } from '../components/Fader';
import { colorVariantsStyles } from '../components/ColorVariants';
import { colorBoxStyles, colorBoxVariables } from '../components/ColorBox';

export default () => {
  const [color, setColor] = React.useState('red');
  return (
    <Provider
      theme={{
        componentStyles: {
          ColorBox: colorBoxStyles,
          ColorVariants: colorVariantsStyles,
          Fader: faderStyles,
          Header: {
            root: {
              fontWeight: 700,
            },
          },
        },
        componentVariables: {
          ColorBox: colorBoxVariables,
        },
      }}
    >
      <DocPage title="Category color schemes">
        <Flex column>
          <Dropdown
            items={[
              'red',
              'redDark',
              'orangeDark',
              'orange',
              'orangeLight',
              'yellowDark',
              'yellow',
              'brown',
              'oliveDark',
              'olive',
              'neon',
              'formatting',
            ]}
            defaultValue={'red'}
            placeholder="Select the color"
            onChange={(e, { value }) => setColor(value as string)}
          />
          <CategoryColorSchemes
            themes={[teamsTheme, teamsHighContrastTheme, teamsDarkTheme]}
            headers={[
              {
                as: 'h3',
                content: 'Design token',
              },
              {
                as: 'h3',
                content: 'Light theme',
              },
              {
                as: 'h3',
                content: 'HC theme',
              },
              {
                as: 'h3',
                content: 'Dark theme',
              },
            ]}
            name={color}
          />
        </Flex>
        <GuidesNavigationFooter previous={{ name: 'Colors', url: 'colors' }} />
      </DocPage>
    </Provider>
  );
};
