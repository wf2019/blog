# GIT安装

[[toc]]

## CentOs yum安装
```sh
# 一条命令直接安装
yum -y install git
```

## 源码包安装
- 从github下载源码包：[https://github.com/git/git](https://github.com/git/git)
- 开始编译安装
```sh
# 进入源码包目录
cd /usr/local/src/git-master

# 执行make命令
make prefix=/usr/local all
make prefix=/usr/local install
```
::: warning
如果报这个错误： make: * [git-credential-store] 错误 1  
一般是缺少了libiconv扩展
:::

#### 安装libiconv扩展：
- yum安装
```sh
yum -y install libevent libevent-devel
```

- 源码安装
```sh
# 依次执行下面的命令即可

cd /usr/local/src/
wget http://ftp.gnu.org/pub/gnu/libiconv/libiconv-1.16.tar.gz
tar -zxvf libiconv-1.16.tar.gz
cd libiconv-1.16
./configure -prefix=/usr/local/libiconv && make && sudo make install
```