# 安装Composer

[[toc]]

## 下载Composer文件
```sh
# 下载安装脚本 － composer-setup.php － 到当前目录
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"

# 执行安装过程
php composer-setup.php

# 删除安装脚本
php -r "unlink('composer-setup.php');"
```

## 安装到系统环境变量

### Mac 和 Linux 系统
- 将前面下载的 <font color="#f08d49">composer.phar</font> 文件移动到 <font color="#f08d49">/usr/local/bin/</font> 目录下面：
```sh
sudo mv composer.phar /usr/local/bin/composer
```

### Windows 系统
- 找到并进入 PHP 的安装目录（和你在命令行中执行的 php 指令应该是同一套 PHP）
- 将 <font color="#f08d49">composer.phar</font> 复制到 PHP 的安装目录下面，也就是和 <font color="#f08d49">php.exe</font> 在同一级目录
- 在 PHP 安装目录下新建一个 <font color="#f08d49">composer.bat</font> 文件，并将下列代码保存到此文件中
```sh
@php "%~dp0composer.phar" %*
```

## 设置镜像地址（阿里云镜像）
### 单项目
```sh
composer config repo.packagist composer https://mirrors.aliyun.com/composer/
```

### 全局
```sh
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```
	
## 更新Composer
```sh
composer selfupdate
```