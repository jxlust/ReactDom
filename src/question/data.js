/**
 * inputFlag 表示选择该选项可以自定义输入
 * type 表示表单类型 Single单选，Multiple多选，Text文本
 * 
 */
const data = {
	id: 1,
	title: '我是xxxxx问卷调查',
	describe: 'xxxxxx描述，萨迦县冷静下来结束啦，xxxxxxxx',
	questions: [{
		qId: 101,
		type: 'Single',
		label: '你最喜欢的水果？',
		require: true,
		options: [{
			label: '香蕉',
			value: 'banana'
		}, {
			label: '橘子',
			value: 'orange'
		}, {
			label: '苹果',
			value: 'apple'
		}]
	}, {
		qId: 102,
		type: 'Multiple',
		label: '你最喜欢的书籍？',
		require: true,
		options: [{
			label: 'book1',
			value: 'b1'
		}, {
			label: 'book2',
			value: 'b2'
		}, {
			label: 'book3',
			value: 'b3'
		}, {
			label: 'book4',
			value: 'b4'
		}]
	}, {
		qId: 103,
		type: 'Text',
		label: '你最喜欢的人？',
		require: true,
		options: null,
	}, {
		qId: 104,
		type: 'Single',
		label: '你最喜欢的东东？',
		require: true,
		options: [{
			label: '达人',
			value: 'banana'
		}, {
			label: '展示',
			value: 'orange'
		}, {
			label: '更新',
			value: 'apple'
		}, {
			label: '其他',
			value: 'other',
			inputFlag: true,
		}]
	}],
}

//表单提交的数据结构
const submitObj = {
	id: 1,
	itemList:[{
		qId: 1,
		fillText: '填入的内容',
		selectValue: 'A,B,C',//选择的内容value
		score: 100,//分数
	}]
}

export {data};