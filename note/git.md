# git 笔记
1. cd .. 返回上一级目录
2. cd 文件夹名 进入目标文件夹
3. ls 看当前文件夹有什么文件
4. 用git查看文件内容暂时忘记了
5. cd ../.. 返回上上级
6. cd d: 进入d盘
7. git init 把线下文件夹转化为与git上同步的仓库
8. git status 查看文件状态
9. git add . 将编辑区的文件放到暂存区文件从红色变成绿色
10. git commit -m "内容" 将暂存区的内容分支 内容为分支备注 
11. git push origin master 将本地文件分支同步到远程分支 master 为分支名字可以随分支变更而变更
12. git remote 项目地址 此操作可以复制git上链接
13. cat 文件名 可以查看文件内容
14. git pull 从git库中下载到本地
15. git clone 链接将git库中的文件克隆到本地文件夹并同步
16. git rest --hard 版本号 切换版本
17. git branch 分支名 建立分支
18. git checkout 分支名 切换分支
19. 在主分支上git merge 分支名 合并分支
20. git branch -d 分支名 删除分支
21. git log 查看上传历史
22. git push origin:分支名 删除git上的分支
23. git 是一个控制版本的工具
24. gitbook serve 生成电子书
25. 电子书格式：SUMMARY.md
26.             READMA.md 前两个文件必须有
27.             名字.md
28. cnpm install -g gitbook-cli 下载gitbook
29.  当发生冲突解决时   <<<<<<HEAD
                        ========== 以上为第一次修改的内容
                        >>>>>>>>>>  以上为第二次修改的内容  发生冲突时删除不需要的，保存修改 。a地点--上传到git--在b地点下载--解决冲突
    进入vim编辑器后 ;q 退出
     在编辑器内编辑后输入;wq推出
30.  
  
