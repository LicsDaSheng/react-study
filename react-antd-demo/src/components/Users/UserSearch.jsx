import React, { PropTypes } from 'react';
import { Form, Input, Button, Select } from 'antd';

const UserSearch = ({
	field,
	keyword,
	onSearch,
	onAdd
}) => {
	function handleSubmit(e) {
		e.preventDefault();
		validateFields((errors) => {
			if (!!errors) {
				return;
			} else {
				onSearch(getFieldValue());
			}
		})
	}

	return (
		<div >
			<Form inline onSubmit={handleSubmit}>
				<Form.Item>
					<Select>
						<Select.Option value="name">名字</Select.Option>
						<Select.Option value="address">地址</Select.Option>
					</Select>
				</Form.Item>
			</Form>
			<div >
				<Button type="ghost" onClick={onAdd}>添加</Button>
			</div>
		</div>
	)
};
export default UserSearch;