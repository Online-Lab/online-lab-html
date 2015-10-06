'use strict';

exports.config = {
  match: process.env.PROXY_API_MATCH || ['/media'],
  target: process.env.PROXY_API_TARGET || 'http://onlinelab-django.production-dokku-1.online-lab.ru',
  proxyHost: process.env.PROXY_API_HOST || 'onlinelab-django.production-dokku-1.online-lab.ru'
};