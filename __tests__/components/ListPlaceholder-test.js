// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import ListPlaceholder from '../../src/js/components/ListPlaceholder';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('ListPlaceholder', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <ListPlaceholder />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
