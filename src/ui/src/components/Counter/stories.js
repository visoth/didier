import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import { WithNotes } from '@kadira/storybook-addon-notes'

import Counter from './index'

storiesOf('Counter', module)
  .addDecorator(withKnobs)
  .add('counter at 2', () => (
    <WithNotes notes={`
      Lol: :D
    `}>
      <Counter
        counter={text('counter', '2')}
        actions={{
          increment: action('increment'),
          doubleAsync: action('doubleAsync')
        }}
      />
    </WithNotes>
  ))
