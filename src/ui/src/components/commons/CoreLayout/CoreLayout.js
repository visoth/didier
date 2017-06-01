// @flow
import React from 'react'
import './CoreLayout.css'
import '/styles/core.css'

type Props = {
    header: React.Element<*>,
    children: React.Element<*>
}

export const CoreLayout = (props: Props) =>
  (<div className='container text-center'>
    <props.header />
    <div className='core-layout__viewport'>
      { props.children }
    </div>
  </div>)

export default CoreLayout
