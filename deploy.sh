#!/usr/bin/env sh

# 终止一个错误
set -e

# 构建
npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:wf2019/blog-web.git master

cd -