import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '@material-ui/core/Button'

storiesOf('Button', module)
    .add('Primary', () => (
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    ))
