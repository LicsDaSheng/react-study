import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
	console.log('in service request ');
  return request(`/api/users?${qs.stringify(params)}`);
}
