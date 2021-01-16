import * as React from 'react';
import * as Renderer from 'react-test-renderer';

import { Icon } from  './';

describe('<Icon />', () => {
	it('renders correctly', () => {
		const tree = Renderer.create(<Icon />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});