import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'
import App from './App'

const root = document.getElementById('app')
ReactDom.render(<App />, root)
