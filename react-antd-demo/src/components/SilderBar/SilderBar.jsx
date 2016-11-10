import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import styles from './SilderBar.less';
function SilderBar() {
    return (

        <div>
            <h2 className={styles.logo}><Icon type="windows" /> SaaS 管理台</h2>
            <br/>
            <Menu
                style={{ background: "#1c2b36",margin: "41px 0 0 0" }}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                >
                <SubMenu key="sub1" title={<span><Icon type="solution" /><span>组织机构</span></span>}>
                    <Menu.Item key="1"><Link to="/users"><Icon type="user" />用户管理</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/users"><Icon type="team" />机构单位</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="solution" /><span>权限管理</span></span>}>
                    <Menu.Item key="3"><Icon type="appstore" />应用管理</Menu.Item>
                    <Menu.Item key="4"><Link to="/menus"><Icon type="bars" />菜单管理</Link></Menu.Item>
                    <Menu.Item key="6"><Icon type="lock" />权限管理</Menu.Item>
                    <Menu.Item key="7"><Icon type="pie-chart" />模块管理</Menu.Item>
                    <Menu.Item key="8"><Icon type="user" />角色管理</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>日志管理</span></span>}>
                    <Menu.Item key="15">日志设置</Menu.Item>
                    <Menu.Item key="16">访问日志</Menu.Item>
                    <Menu.Item key="17">操作日志</Menu.Item>
                    <Menu.Item key="18">异常日志</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统配置</span></span>}>
                    <Menu.Item key="29">系统设置</Menu.Item>
                    <Menu.Item key="20">数据字典</Menu.Item>
                    <Menu.Item key="21">任务管理</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
}
export default SilderBar;