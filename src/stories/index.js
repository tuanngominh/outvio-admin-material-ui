import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import RaisedButton from 'material-ui/RaisedButton'

storiesOf('RaisedButton', module)
  .add('Primary', () => (
    <RaisedButton label="Primary" primary={true} />
  ))
