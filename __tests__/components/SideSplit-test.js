// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react-test-renderer';

import SideSplit from '../../src/js/components/SideSplit';

describe('SideSplit', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <SideSplit>
        <div>
          <div>
            <SideSplit.SideCloser />
          </div>
        </div>
        <div>
          <div>
            <SideSplit.SideOpener />
          </div>
        </div>
      </SideSplit>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
