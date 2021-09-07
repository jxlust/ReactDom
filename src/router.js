import React from 'react'
import Home from '@pages/Home'   //因为在一个文件夹下面创建的，所以要找到准确位置。
import Text from '@pages/Text'
import Box from '@pages/Box.js'

import {BrowserRouter,HashRouter,Route,Link} from 'react-router-dom'
import QPage from './question/index.js'

class MyRouter extends React.Component{

    render(){

        return (
                // 根容器
                <HashRouter>
                <div>
                    <h1>这是根目录</h1>
                    <hr/>
                    {/* 链接 */}
                   <Link to="/home">首页</Link>  
                   <Link to="/text">新闻</Link>                    
                    <hr/>
                    {/* 路由规则，Route是配置路由的规则，同时也是一个占位符 */}
                    <Route path="/home" component={Home} />
                    <hr/>
                    <Route path="/text"  component={Text}></Route>
										<Route path="/box"  component={Box}></Route>
										<Route path="/question" component={QPage}></Route>
                    
                </div>
                {/* <DatePicker></DatePicker><Button type="primary" icon="twitter">点击</Button> */}
                </HashRouter>
        );
    }
}

export default MyRouter;