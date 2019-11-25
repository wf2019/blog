# GIT常用命令

[[toc]]

## 提交指定文件
```sh
git add -p <file>
git commit -m 'test'
git push
```

## 更改git仓库地址
```sh
git remote set-url origin 新地址 原地址
```

## 新建远程分支
```sh
# 创建本地分支
git branch branch_name

# 推送到远程仓库
git push origin branch_name
```

## 版本回退
```sh
git reset --hard 版本号
git push origin HEAD --force
```

## 版本回退(单个文件)
```sh
# 查看文件的修改记录
git log -p -2 l-xoj-mian.js

# 回退到指定的版本
git reset efb9f7accc916eebbf1ac7513faf328f4295b21a l-xoj-mian.js

# 提交到本地参考
git commit -m '回退js'

# 更新到工作目录
git checkout l-xoj-mian.js

# 提交到远程仓库
git push
```

## 撤销某次提交
```sh
git revert commit_id
```

## 删除分支
### 本地分支
```sh
# 普通删除
git branch -d 本地分支名

# 强制删除
git branch -D 本地分支名
```

### 远程分支
```sh
git push origin --delete 远程分支名
```