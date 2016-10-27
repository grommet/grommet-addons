// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import FilterControl from '../../src/js/components/FilterControl';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('FilterControl', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <FilterControl />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
