import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import './App.css';

export function Navigation(props) {
	return (
		<Nav className="Navigation" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
			<Nav.Item>
				<Nav.Link href="/home">Active</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}
