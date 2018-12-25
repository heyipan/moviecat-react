import {Card, Layout, Menu, Icon} from 'antd';
import React, {Component} from 'react';
import Link from 'umi/link';

// 引入子菜单组件
const SubMenu = Menu.SubMenu;
const {Header, Footer, Sider, Content} = Layout;

class SiderDemo extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh'}}>
                    <div style={{height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to="/in_theaters">正在热映</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/coming_soon">即将上映</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/dashboard/workplace">top250</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background:'#000'}}>
                        <span style={{color:'#fff',paddingLeft:'2%', fontSize:'1.4em'}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{cursor: 'pointer'}}
                            />
                        </span>
                            <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}></span>
                            <span className="originalSearch">
                        </span>
                    </Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }

}
export default SiderDemo;