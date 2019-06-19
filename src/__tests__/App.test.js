// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

jest.mock('tone');
jest.mock('react-p5-wrapper');

describe('App', () => {
  describe('First screen', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
