# Docker常用命令

[[toc]]

## 进入某个容器
```sh
docker exec -it container_name /bin/bash
```

## 退出容器
### 退出不关闭容器
```
ctrl + p + q
```
### 退出关闭容器
```
ctrl + d
```

## 宿主机执行容器内命令
```sh
# 例：宿主机关闭php容器的swoole服务
docker exec -it php-fpm /bin/bash -c 'cd /www/project-dir && php easyswoole stop'
```

## 创建一个网络
```sh
# 创建一个web网络，默认驱动为bridge
docker network create web
```

## 删除一个网络
```sh
# 删除web网络
docker network rm web

# 删除多个网络
docker network rm web web2 web3
```

## 加入一个网络
```sh
# nginx加入到web网络
docker network connect web nginx

# php-fpm加入到web网络，取了一个别名：php
docker network connect --alias php web php-fpm
```

## 退出一个网络
```sh
# nginx容器退出web网络
docker network disconnect web nginx

# 强制退出网络
docker network disconnect -f web nginx
```

## Commit 提交容器
### docker commit
- 提交php-fpm容器，镜像名：1018808441/php ，tag：v3
```sh
docker commit php-fpm 1018808441/php:v3
```

### docker push
- 推送本地的1018808441/php:v3镜像到远程仓库
```sh
docker push 1018808441/php:v3
```

::: warning
docker push 命令是需要登录的
:::

### docker login
- 按照提示输入登录信息
```sh
docker login
```