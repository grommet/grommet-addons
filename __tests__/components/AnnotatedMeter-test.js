// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react-test-renderer';

import AnnotatedMeter from '../../src/js/components/AnnotatedMeter';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('AnnotatedMeter', () => {
  it('has correct simple options - bar', () => {
    const component = renderer.create(
      <AnnotatedMeter type='bar' series={[
        { label: 'label-1', value: 10 },
        { label: 'label-2', value: 20 }
      ]}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
    it('has correct simple options - circle', () => {
    const component = renderer.create(
      <AnnotatedMeter type='circle' series={[
        { label: 'label-1', value: 10 },
        { label: 'label-2', value: 20 }
      ]}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
