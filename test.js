import React from 'react';

/**
 * 字符串转成base64编码
 * @param {string} str 
 * @returns 
 */
function encodeBase64(str) {
	try {
		return window.atob(str);
	} catch (error) {
		return 'This is a error!!';
	}
}

function decodeBase64(code) {
	try {
		return window.btoa(code);
	} catch (error) {
		return 'This is a error!!';
	}
  
}

function transFunc(value,func) {
	let str = value.toString();
	return func(str)
}

function transNumber(value,func) {
	let number = parseInt(value);
	return func(number)
}


const TypeEnum = {
	e: 'encode code',
	d: 'decode code'
}

class MyCode extends React.Component{
	constructor(props){
		super(props);

	}
	inputChange = (e) => {
		this.props.callback(e.target.value)
	}
	render(){
		const type = this.props.type;
		const value = this.props.value;
		return (<div>
			{TypeEnum[type]}:
			<input value={value} onChange={this.inputChange}></input>
		</div>)
	}
}


class CodeUtil extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			value: 'A',
			type: 'e'
		}
		// this.handlerEncodeValue.bind(this)
		// this.handlerDecodeValue.bind(this)
	}
	handlerEncodeValue = (v) => {
		this.setState({
			value: v,
			type: 'e'
		})
	}
	
	handlerDecodeValue = (v) => {
		this.setState({
			value: v,
			type: 'd'
		})
	}

	render(){
		console.log(1111,this.state.value,window.btoa('ABC'));
		const value = this.state.value;
		const type = this.state.type;
		const eV = type === 'e' ? value : transFunc(value,encodeBase64);
		const dV = type === 'd' ? value : transFunc(value,decodeBase64);

		return (<div>
			<MyCode type="e" value={eV} callback={this.handlerEncodeValue}></MyCode>
			<MyCode type="d" value={dV} callback={this.handlerDecodeValue}></MyCode>
			<div className="show">源字符串：{eV}</div>
		</div>)
	}

}


export default CodeUtil;

// class Test extends React.Component {
// 	constructor(props) {
// 		super(props)
// 	}
// 	render() {
// 		return (<div>我是文本哈哈哈哈</div>)
// 	}
// }
// export default Test;
