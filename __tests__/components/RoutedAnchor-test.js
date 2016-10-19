// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import RoutedAnchor from '../../src/js/components/RoutedAnchor';
import RouterContext from '../utils/RouterContext';

describe('RoutedAnchor', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <RouterContext>
        <RoutedAnchor path='test' />
      </RouterContext>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
