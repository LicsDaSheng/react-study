import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function SilderBar ()
{
	return (
		<Menu 
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <SubMenu key="sub1" title={<span><Icon type="bars" /><span>租户与服务</span></span>}>
          <MenuItemGroup title="租户系统">
            <Menu.Item key="1"><Link to="/users"><Icon type="bars"/>租户管理</Link></Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="应用服务">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>应用管理</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统配置</span></span>}>
          <Menu.Item key="9">账号管理</Menu.Item>
          <Menu.Item key="10">权限管理</Menu.Item>
          <Menu.Item key="11">任务管理</Menu.Item>
          <Menu.Item key="12">日志管理</Menu.Item>
        </SubMenu>
      </Menu>
	);
}
export default SilderBar;