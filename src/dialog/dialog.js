// import styles from './dialog.module.scss' // styles.btngroup
import styles from './dialog.scss'
import * as React from 'react'
// import cx from 'classnames'
function FancyBorder (props) {
	return <div className="FancyMask">
		<div className={`FancyWrap FancyBorder FancyBorder-${props.color}`}>
			{props.children}
		</div>
	</div>

}

class Dialog extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		const {
			title,
			message,
			onConfirm,
			onCancel,
			children
		} = this.props;
		return <FancyBorder color="blue">
			<h1 className='Dialog-title'>
				{title}
			</h1>
			<p className="Dialog-message">
				{message}
			</p>
			{children}
			<div className='btngroup'>
				<button className='button' onClick={onCancel}>取消</button>
				<button className={`${styles.button} ${styles.active}`} onClick={onConfirm}>确定</button>
			</div>
		</FancyBorder>
	}
}

class WelcomeDialog extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			login: ''
		}
	}
	inputChange = (e) => {
		this.setState({
			login: e.target.value
		})
	}
	loginClick = (e) => {
		// alert(`Weclome ${this.state.login}`)
		const v = this.state.login;
		this.props.onConfirm(v);
	}
	render () {
		return <Dialog {...this.props} >
			<div className="inputWrap">
				<input onChange={this.inputChange} />
				<button onClick={this.loginClick}>登录</button>
			</div>
		</Dialog>
	}
}

export default WelcomeDialog;