# Dcoker Compose
- [https://github.com/docker/compose](https://github.com/docker/compose)

[[toc]]

## 安装docker-compose
- [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Web 环境 Compose
- 新建文件 `docker-compose.yml`
- 内容如下：
```yml
# Docker version 19.03.2
# docker-compose version 1.24.1
# LibreSSL 2.6.5
version: "3"
services:
  web:
    image: 1018808441/nginx:v1
    container_name: nginx
    hostname: nginx
    ports:
      - "80:80"
      - "443:443"
    expose:
      - "80"
    volumes:
      - /usr/local/docker/nginx/www:/usr/share/nginx/html
      - /usr/local/docker/nginx/config/nginx.conf:/etc/nginx/nginx.conf
      - /usr/local/docker/nginx/logs:/var/log/nginx
      - /usr/local/docker/nginx/config/vhost:/etc/nginx/conf.d
      - /usr/local/docker/nginx/ssl:/etc/nginx/ssl
    networks:
      - wf-web
    restart: always

  php:
    image: 1018808441/php:7.3-v2
    container_name: php-fpm
    hostname: php-fpm
    volumes:
      - /usr/local/docker/nginx/www:/www
	  - /home:/home
    networks:
      - wf-web
    restart: always

  db:
    image: 1018808441/mysql
    container_name: mysql
    hostname: mysql
    command: [ '--default-authentication-plugin=mysql_native_password', '--character-set-server=utf8mb4', '--collation-server=utf8mb4_unicode_ci']
    environment:
      - MYSQL_ROOT_PASSWORD=root
    ports:
      - "3306:3306"
    expose:
      - "3306"
    volumes:
      - /usr/local/docker/mysql:/var/lib/mysql
    networks:
      - wf-web
    restart: always

networks:
  wf-web:
    driver: bridge
```

::: danger
Mysql 容器创建后，会有一个允许远程连接的root用户，记住一定要删除！！！
:::

### Mysql新建用户，允许远程链接
- 允许test用户通过密码test123在任何地方连接
```sql
GRANT ALL PRIVILEGES ON *.* TO 'test'@'%' IDENTIFIED BY 'test123' WITH GRANT OPTION;
```

### nginx配置文件
- [https://gitee.com/1018808441/docker_lnmp_config](https://gitee.com/1018808441/docker_lnmp_config)