import React,{ PropTypes } from 'react';
import { Button, Icon, Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from './Header.less';

function getMenuKeyFromUrl(pathname){
	let key ='';

	try{
	
		key = pathname.match(/\/([^\/])/i)[1];
	} catch (e) {}
	return;
}

function Header({ location }){

	return (
		 <Row className={styles.header}>
            	<Col span={24} offset={0}>
            		<div>
                		<h2 className={styles.logo}><Icon type="windows" /> SaaS 管理台</h2>
                	</div> 
                	<div className={styles.menu}>
		            	<h4 className={styles.welcome}><Icon type="github"/>  欢迎您，Admin</h4>
						<Button type="primary" ><Link to="/"><Icon type="home"/>首页</Link></Button>
						<Button type="primary" ><Link to="/login"><Icon type="logout"/>退出</Link></Button>
						
						
					</div>
				</Col>
        </Row>
	);
}

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
