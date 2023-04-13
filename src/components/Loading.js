import React, { Component } from 'react'
import Load from '../loading.gif'
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center my-4'>
        <img src={Load} alt="Loading" />
      </div>
    )
  }
}
