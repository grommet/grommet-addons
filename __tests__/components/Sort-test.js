// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react-test-renderer';

import Sort from '../../src/js/components/Sort';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('Sort', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <Sort options={[
        { label: 'First', value: 'first' },
        { label: 'Second', value: 'second' }
      ]}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
