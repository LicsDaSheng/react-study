import React, { PropTypes } from 'react';
import { Button } from 'antd'

function UserSearch({
	form,
	field,
	keyword,
	onSearch,
	onAdd
}) {
	return (
		<div >
	      <div >
	      </div>
	      <div >
	        <Button type="ghost" onClick={onAdd}>添加</Button>
	      </div>
    	</div>
	)
};
export default UserSearch;