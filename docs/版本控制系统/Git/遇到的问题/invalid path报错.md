```
> git pull --tags origin main
From https://github.com/bin59/---
 * branch            main       -> FETCH_HEAD
error: invalid path 'linux 报错: Address already in use'
```

解决：https://blog.csdn.net/Changxing_J/article/details/133910042

git config core.protectNTFS false
