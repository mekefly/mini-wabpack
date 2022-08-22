# mini-webpack

各种类型的template将通过分支的方式添加进来

更详细的讲解见文章:

[mini-webpack](https://github.com/mekefly/blog/issues/1)

[掘金 mini-webpack](https://juejin.cn/post/7134613122022637599)

## Includes

- [x] TypeScript@4.7.4
- [x] build (Rollup@2.77)
- [x] test (vitest@0.22)

## todo

- [x] 制作依赖图
  - [x] 提取依赖
    - [x] 获取文件内容
    - [x] 生成抽象语法树
    - [x] 通过抽象语法树来生成依赖信息
    - [x] 对代码进行 import 转 require
  - [x] 对依赖进行平铺
- [x] 合成结果
  - [x] 模板
    - [x] 模板的包装方案
    - [x] require 的手动实现
- [x] 写入文件
- [x] Loader
- [ ] Plugin

## Get started

### 1. 运行build

> pnpm run-build

### 2. 查看build/index.js

这个文件就是刚才通过build生成的文件

### 3. 测试代码运行

进入 `example` 目录运行index.html查看刚才的代码执行效果
