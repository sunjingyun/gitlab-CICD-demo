##### 提交代码的message格式要求
```
提交代码时，请严格使用这个格式：`^(feat|fix|docs|style|refactor|test|chore)\\(+.+\\)\\:\\s.+$`
示例1：feat(scope-name): add entities for users
示例2：fix(scope-name): fix bug in authorization middleware
示例3：test(scope-name): add some unit tests

### 代码提交的类型（通过提交类型来过滤提交记录，追查问题时可以迅速定位到哪些提交需要重点关注）
feat：新增 feature
fix：修复bug
docs：仅修改文档
style：仅修改代码风格
refactor：仅代码重构，没有增加新的feature或者修复bug
test：仅新增或改动单元测试
chore：改变构建规则、添加依赖库或添加工具等等

### 代码提交的影响范围（通过影响范围来过滤提交记录，追查问题时可以迅速定位到哪些提交需要重点关注）
（user）：改动只影响user模块
（book）：改动只影响book模块
（auth）：改动只影响权限检查
（xxx）：内容可以自定义，简洁描述代码影响范围即可

### 提交代码的描述（一句话解释提交代码的原因即可）
add entities for users
fix bug in authorization middleware
add some unit tests

NOTE: 请不要使用类似于：bug fix、fix、updated等的描述内容，没人能记住每个updated的含义
```

##### 如何向主分支提交代码（Git Flow & Merge Request）
```
本项目采用单分支模式

第一步：基于最新的主分支创建个人本地分支（例如 sunjingyun/init-project-structure）
    git checkout -B your-name/your-branch-name
第二步：向分支提交代码
    git add . && git commit -m 'feat(pipeline): ${message}'
第三步：将本地分支推向远程
    git push -u origin your-name/your-branch-name
第四步：创建Merge Request（创建MR的目的是保证主分支的健康）
    进入对应的issue，点击`Create merge request`的下拉框，填入新创建的分支名，点击`Create merge request`
    创建Merge Request后会自动触发持续集成，以及开发相关代码的review。
第五步：将个人分支合入主分支后删除个人分支
```

