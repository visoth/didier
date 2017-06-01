import React from 'react'
import { storiesOf } from '@kadira/storybook'

import StyledComponentExample from './index'

storiesOf('styledComponentExample', module)
  .add('styled', () => (
    <StyledComponentExample />
  ))
