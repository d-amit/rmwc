import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Checkbox } from './checkbox';

class CheckboxStory extends React.Component {
	state = {
		checked: false
	}

	onChange(evt) {
		this.setState({checked: evt.target.checked})
		action('Checked: ' + evt.target.checked)()
	}

	render() {
		return (
			<Checkbox
				disabled={boolean('disabled', false)}
				checked={boolean('checked', this.state.checked)}
				value="value"
				onChange={evt => this.onChange(evt)}
				label={text('label', 'Hello world')}
			/>
		)
	}
}

storiesOf('Inputs and Controls', module)
	.add('Checkbox', () => <CheckboxStory />)