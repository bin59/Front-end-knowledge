# You have not concluded your merge (MERGE_HEAD exists)

解决：https://blog.csdn.net/ximaiyao1984/article/details/116025503

Git 提交报错：error:You have not concluded your merge (MERGE_HEAD exists)

原因：pull 下来的以前代码自动合并失败
解决
方法一：保留本地的更改，中止合并->重新合并->重新拉取

```
git merge --abort
git reset --merge
git pull
# git pull之后然后重新解决冲突，再push
```

提示：

```
G:\binbin\web\my\Front-end-knowledge>git pull
error: You have not concluded your merge (MERGE_HEAD exists).
hint: Please, commit your changes before merging.
fatal: Exiting because of unfinished merge.
```

则

```
git commit -m "xxx"
```

方案二：远端版本覆盖本地版本（慎重）

```
git fetch --all
git reset --hard origin/master
git fetch
```

> Git fetch 和 git pull 的区别

> git fetch：只是从远程获取最新版本到本地，不会 merge(合并)
> git pull：从远程获取最新版本并 merge(合并)到本地 —相当于进行了 git fetch 和 git merge 两部操作

```
# 切换分支
git checkout master
# 查看本地及远程分支
git branch -a
# 查看远程分支
git branch -r
# 查看本地分支
git branch
# 删除远程dev分支
git push origin --delete dev
# 删除本地dev分支
git branch -d dev
# 对比本地与远程test分支
git diff test
# 合并分支
git merge test

```
