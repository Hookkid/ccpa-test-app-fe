import request from '../../shared/request';

export function getAllProducts() {
  return request('/products');
}
