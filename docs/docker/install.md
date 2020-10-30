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

## CentOS7 yum阿里云软件源安装（快）

::: tip 原文地址
[https://yq.aliyun.com/articles/110806?spm=5176.8351553.0.0.38e51991Lhnyxp](https://yq.aliyun.com/articles/110806?spm=5176.8351553.0.0.38e51991Lhnyxp)
:::

- Step 1: 安装必要的一些系统工具
```sh
yum install -y yum-utils device-mapper-persistent-data lvm2
```

- Step 2: 添加软件源信息
```sh
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

- Step 3: 更新并安装 Docker-CE
```sh
yum makecache fast
yum -y install docker-ce
yum -y install docker-compose
```

- Step 4: 开启Docker服务
```sh
systemctl start docker
```

- Step 5: 加入开机启动
```sh
systemctl enable docker
```


## 镜像加速
[https://cr.console.aliyun.com](https://cr.console.aliyun.com)