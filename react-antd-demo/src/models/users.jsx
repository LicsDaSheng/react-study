import { hashHistory } from 'dva/router';
import { query } from '../services/users';

export default {
	namespace: 'aaa',

	state: {
		list: [],
		total: null,
		loading: false, //加载状态
		current: null,  //当前分页信息
		currentItem: {}, // 当前操作的用户对象
		modalVisible: false, //弹出窗的显示状态
		modalType: 'create', //弹出窗的类型(添加用户，编辑用户)
	},

	subscriptions: {
		setup({ dispatch, history}) {

			history.listen(location => {
				if (location.pathname === '/users') {
					console.log('pre dispatch');
					dispatch({
						type: 'query',
						payload: {}
					});
				}
			});
		},
	},


	effects: {
		*query({ payload}, {select, call, put}) {

			console.log('pre showLoading');

			yield put({ type: 'showLoading' });

			console.log('pre call query');
			const { data } = yield call(query);
			console.log('call complete[' + data + ']');
			if (data) {
				yield put({
					type: 'querySuccess',
					payload: {
						list: data.data,
						total: data.page.total,
						current: data.page.current,
					},
				});
			}
		},
		*create() { },
		*'delete'() { },
		*update() { },
	},
	reducers: {
		showLoading(state, action) {
			return {...state, lodaing: true };
		}, //控制加载状态的reducer
		showModal() { },   //控制 Modal 显示状态的reducer
		hideModal() { },
		querySuccess(state, action) {
			return {...state, ...action.payload, loading: false };
		},
		createSuccess() { },
		deleteSuccess() { },
		updateSuccess() { },
	},
}