# nginx项目配置

[[toc]]


## Https EasySwoole
```
server {
    listen       80;
    server_name  zxzyw.net;
    return 301 http://www.zxzyw.net$request_uri;
}
server {
    listen       80;
    server_name  www.zxzyw.net;
    rewrite ^(.*) https://$server_name$1 permanent;

    location / {
        root   /usr/share/nginx/html/zxzyw-php/Public;

        proxy_http_version 1.1;
        proxy_set_header Connection "keep-alive";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        if (!-f $request_filename) {
            proxy_pass http://php:9568;
        }
    }

}

server {
    listen       443 ssl;
    server_name  www.zxzyw.net;
    ssl_certificate  /etc/nginx/ssl/www.zxzyw.net.pem;
    ssl_certificate_key  /etc/nginx/ssl/www.zxzyw.net.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    location / {
        root    /usr/share/nginx/html/zxzyw-php/Public;
        proxy_http_version 1.1;
        proxy_set_header Connection "keep-alive";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        if (!-f $request_filename) {
            proxy_pass http://php:9568;
        }
    }
}
```

## vue转发
```
server {
    listen       80;
    server_name  manage.zxzyw.net;

    location / {
        root   /usr/share/nginx/html/zxzyw-php/Manage;
        index index.htm index.html;
        try_files $uri $uri/ /index.html;
    }
	# （部署时请删除这段注释）如果访问不到，尝试取消结尾的  /
    location /api/ {
        proxy_pass http://php:9568;
    }
}
```