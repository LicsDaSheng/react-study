import React,{ PropTypes } from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from './MainLayout.less';

function getMenuKeyFromUrl(pathname){
	let key ='';

	try{
	
		key = pathname.match(/\/([^\/])/i)[1];
	} catch (e) {}
	return;
}

function Header({ location }){

	return (
			<div >
				<Menu
					selectedKeys={[getMenuKeyFromUrl(location.pathname)]}
					mode="horizontal"
		      		theme="light"
				>
					<Menu.Item key="home">
						<Link to="/"><Icon type="home"/>Home</Link>
					</Menu.Item>
					<Menu.Item key="users">
						<Link to="/users"><Icon type="bars"/>Users</Link>
					</Menu.Item>
				</Menu>
			</div>
	);
}

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
