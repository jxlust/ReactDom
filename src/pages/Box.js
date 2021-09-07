import * as React from 'react';
import './box.scss';
import staticize from '@/dialog/index.js';
class Box extends React.Component {
	constructor(props) {
		super(props)
	}
	openDialog = (e) => {
		console.log('事件对象：', e);
		let ev = e || window.event;
		const target = ev.target || ev.srcElement;
		if (target.nodeName.toLocaleLowerCase() == 'div' &&  target.className.includes('item')) {
			let number = target.className.match(/[0-9]/g).join('');
			staticize({
				title: `弹框标题${number}`,
				message: '我是描述内容哦哦哦内容哦',
			}).then((v) => {
				console.log('确定回调执行...',v);
			})
		}

	}
	render () {
		let numbers = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10]
		return (<div className="box" onClick={this.openDialog}>
			{numbers.map(item => <div className={`item item-${item}`} key={item}>内容{item}</div>)}
		</div>)
	}
}
export default Box;