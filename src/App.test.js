import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import App from './App'

test('match snapshot', () => {
  const Wrapper = shallow(<App />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
