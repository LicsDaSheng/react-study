import React, { PropTypes } from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import styles from './MainLayout.less';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SilderBar from '../SilderBar/SilderBar';

function MainLayout({ children, location}){
	return (
		<div className={styles.container} >
			<div className={styles.sider}>				
				<SilderBar></SilderBar>
			</div>				
			<div className={styles.main}>
				<div className={styles.header}>
					<Header location={location} />	
				</div>	
				
				<div className={styles.breadcrumb}>
		            <Breadcrumb>
		              <Breadcrumb.Item>首页</Breadcrumb.Item>
		              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
		              <Breadcrumb.Item>某应用</Breadcrumb.Item>
		            </Breadcrumb>
		         </div>
		         <div className={styles.contentContainer}>
					{children}
				</div>				
			</div>
		</div>
	);
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) ,
  location: PropTypes.object,
};

export default MainLayout;