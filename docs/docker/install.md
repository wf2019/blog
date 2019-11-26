# Docker安装 
- [https://docs.docker.com/install/linux/docker-ce/centos/](https://docs.docker.com/install/linux/docker-ce/centos/)

[[toc]]

## CentOS安装
### 卸载旧版
```sh
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

### 安装依赖包
```sh
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

### 配置yun源
```sh
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

### 安装
- 最新版本的 Docker Engine-Community 和 containerd
```sh
sudo yum install docker-ce docker-ce-cli containerd.io
```

- 安装特定版本
```sh
# 查看可安装版本列表
yum list docker-ce --showduplicates | sort -r

# 安装指定版本
sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
```