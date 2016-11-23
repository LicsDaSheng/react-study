import React,{ PropTypes } from 'react';
// 引入 connect 工具函数
import { connect } from 'dva';
import MainLayout from '../../components/MainLayout/MainLayout';
import UserList from '../../components/Users/UserList';
import UserSearch from '../../components/Users/UserSearch';
import UserModal from '../../components/Users/UserModal';


function Users({ location, dispatch, users}){

	const {
		loading, list, total, current, currentItem, modalVisible, modalType
	} = users;


	const userSearchProps = {
		field,
		keyword,
		onSearch(fieldsValue){
			console.log('onsearch');
		},
		onAdd(){
			console.log('onadd');
		}
	};
	const userListProps ={
		dataSource: list,
		total,
	    current,
	    loading,
	};

	const userModalProps = {};
	console.log(location.pathname);
	return (
		
		<div>
			<UserSearch {...userSearchProps}/>
			<UserList {...userListProps}/>
			<UserModal {...userModalProps}/>
		</div>		
	);
}

Users.propTypes = {
	users: PropTypes.object,
};

//制定订阅的数据 关联users
function mapStateToProps({ target }) {
  return { users: target };
}

export default  connect(mapStateToProps)(Users);