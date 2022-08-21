# mini-webpack

各种类型的template将通过分支的方式添加进来

## Includes

- [x] TypeScript@4.7.4
- [x] build (Rollup@2.77)
- [x] test (vitest@0.22)

## todo

- [x] 生成我们所需要的js
  - [x] 获取文件内容
  - [x] 提取依赖
  - [x] 制作依赖图
  - [x] 将import 转换为 require
  - [x] require的实现
  - [x] 合成所需代码

## Get started

### 1. 运行build

> pnpm run-build

### 2. 查看build/index.js

这个文件就是刚才通过build生成的文件

### 3. 测试代码运行

进入 `example` 目录运行index.html查看刚才的代码执行效果
