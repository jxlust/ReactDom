import Question from './question.jsx';
import * as React from 'react';
import {data as getData} from './data';
class QPage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return <Question questions={getData.questions}></Question>
	}
}

export default QPage;