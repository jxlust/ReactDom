import * as React from 'react';
// import styles from './question.scss';
import './question.scss';

// function FormItem(props) {
// 		return <div>{props.label}</div>
// }

class MyTextArea extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 'abc'
		}
	}
	handlerChange = (e) => {
		console.log('e:',e);
		this.setState({value: e.target.value})
		this.props.onTextChange(e.target.value);
	}
	render () {
		return (<div className="qItem-wrap">
		<textarea value={this.state.value} onChange={this.handlerChange} className="qItem-textarea" rows="2" maxLength="10"></textarea>
	</div>);
	}
}
class RadioGroup extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		const { qId, options } = this.props;
		return (<div className="qItem-wrap">
			<div className="radio-group">
				{options.map((item, index) => <div key={index} className="radio-item">
					<input type="radio" name={`radio${qId}`} value={item.value} id={`radio${qId}-${index}`} />
					<label>{item.label}</label> 
				</div>)}
			</div>
		</div>);
	}
}
class CheckBoxGroup extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		const { qId, options } = this.props;

		return (<div className="qItem-wrap">
			<div className="checkbox-group">
				{options.map((item, index) => <div key={index} className="checkbox-item">
					<input type="checkbox" name={`ck${qId}`} value={item.value} />
					<label>{item.label}</label>
				</div>)}

			</div>
		</div>);
	}
}

class FormItem extends React.Component {
	constructor(props) {
		super(props)

	}
	handlerTextChange = (value) => {
		console.log('textChange:',value);
	}
	render () {
		const { label, qId, type, options, index } = this.props;
		const qtitle = `${index + 1}、${label}`;

		let typeComponent = undefined;
		let typeString = ''
		switch (type) {
			case 'Single':
				typeComponent = <RadioGroup qId={qId} options={options}></RadioGroup>
				typeString = '(单选)'
				break;
			case 'Multiple':
				typeComponent = <CheckBoxGroup qId={qId} options={options}></CheckBoxGroup>
				typeString = '(多选)'
				break;
			case 'Text':
				typeComponent = <MyTextArea qId={qId} onTextChange={this.handlerTextChange}></MyTextArea>;
				typeString = '(填空)'

				break;
		}
		return (<div className="qItem">
			<div className="qItem-title">{qtitle}{typeString}</div>
			{typeComponent}

		</div>)
	}

}

class Question extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			results: []
		}
	}

	render () {
		const lists = this.props.questions;
		console.log(111, lists);
		return (<div className="q-form">
			{lists.map((item, index) => <FormItem key={item.qId} {...item} index={index}></FormItem>)}
			<div className="optBtn">
				<input type="button" className="submitBtn"  value="提交"/>
			</div>
		</div>)
	}
}

export default Question;
