import request from '../../shared/request';

export function login({ email, password }) {
  return request('/auth/signin', {
    method: 'POST',
    body: { email, password }
  });
}

export function loginTwoFactor({ jwt, token }) {
  return request('/account/login/2fa', {
    method: 'POST',
    body: { jwt, token }
  });
}

export function register({ username, firstName, lastName, email, password }) {
  return request('/auth/signup', {
    method: 'POST',
    body: { username, firstName, lastName, email, password }
  });
}

export function registerProspect({ name, email, zipcode }) {
  return request('/prospects/', {
    method: 'POST',
    body: { name, email, zipcode }
  });
}

export function getAccount() {
  return request('/account/settings/get-account', {
    method: 'GET'
  });
}

export function forgotPassword({ email }) {
  return request('/account/forgot-password', {
    method: 'POST',
    body: { email }
  });
}

export function resetPassword({ token, password }) {
  return request('/account/reset-password', {
    method: 'POST',
    body: { token, password }
  });
}

export function confirmEmail({ token }) {
  return request('/account/confirm-email', {
    method: 'POST',
    body: { token }
  });
}

export function changePassword({ oldPassword, newPassword }) {
  return request('/account/settings/change-password', {
    method: 'POST',
    body: { oldPassword, newPassword }
  });
}

export function generateTwoFactorAuthenticationSMS({ phoneNumber }) {
  return request('/account/settings/generate-two-factor-sms', {
    method: 'POST',
    body: { phoneNumber }
  });
}

export function configureTwoFactorAuthenticationSMS({ token, secret }) {
  return request('/account/settings/configure-two-factor-sms', {
    method: 'POST',
    body: { token, secret }
  });
}

export function generateTwoFactorAuthenticationQR() {
  return request('/account/settings/generate-two-factor-qr', {
    method: 'POST'
  });
}

export function configureTwoFactorAuthenticationQR({ token, secret }) {
  return request('/account/settings/configure-two-factor-qr', {
    method: 'POST',
    body: { token, secret }
  });
}

export function disableTwoFactorAuthentication({ password }) {
  return request('/account/settings/two-factor-disable', {
    method: 'POST',
    body: { password }
  });
}

export function getTwoFactorAuthenticationStatus() {
  return request('/account/settings/two-factor-status', {
    method: 'GET'
  });
}

export async function privacyOptout({ email, firstName, lastName, phone }) {
  const options = {
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      originEntity: 'test',
      optedOut: true
    }),
    headers: { 'Content-Type': 'application/json' },
    method: 'post'
  };
  const response = await fetch(
    'https://pr123--aaa-ncnu--digital-ccpa-dns.calstate.aaabeta.com/endpoints/privacy-rights/v1',
    options
  );
  const json = await response.json();
  if (json.success) {
    return { email, firstName, lastName, optedOut: true };
  } else {
    return json;
  }
}
