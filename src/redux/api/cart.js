import request from '../../shared/request';

export function getCartItems(userId) {
  return request(`/cart/${userId}`);
}
