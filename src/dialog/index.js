import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WelcomeDialog from './dialog.js';
const staticize  = (props) => {
	return new Promise((resolve) => {
			const wrap = document.createElement('div');
			document.body.appendChild(wrap);
			const close = () => {
				document.body.removeChild(wrap);
			}
			const sure = (v) => {
				close();
				resolve(v);
			}
			ReactDOM.render(<WelcomeDialog {...props} onCancel={close} onConfirm={sure} />,wrap);
	})
}

export default staticize;