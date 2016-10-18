// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import RoutedButton from '../../src/js/components/RoutedButton';
import RouterContext from '../utils/RouterContext';

describe('RoutedButton', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <RouterContext>
        <RoutedButton path='test' />
      </RouterContext>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
