#注意 
- H5端测试请在HBUILDER X的内置浏览器中登录，我的服务器没有设置跨域
- 小程序真机调试会检测连接网址，需要把 ./common/config.js 中 SocketUrl BaseUrl网址加到后台 非常重要 非常重要 非常重要 如果不会的话请自己阅读小程序相关文档，不解释，而且小程序真机扫码调试会导到 webstock失败，建议使用自动真机调试。
- 不要用微信登录，因为有后台鉴权，或是你修改后台登录代码 取消鉴权部分。
- 如果要自己搭后台，推荐云主机，用虚拟主机就算了。如果不想自己搭后台，可以直接用我示例的接口。后面我将会提供一个不用登录鉴权的地址。

###  四端亲测可用
H5 微信小程序 支付宝小程序	APP 亲测可用。理论上QQ其它小程序也可以。因个人对界面设计能力不足，导致样式不好看，但功能绝对是现有聊天工具里最全的，现有工具都只是前端模版，我这里面是集成后台功能。

### 语音、图片、聊天记录保存
已集成语音聊天、图片聊天、表情包使用（小程序开发工具不支持，真机使用无问题），稍做修改可以集成到项目中做客服、私聊工具。聊天记录保存，多端同步，小程序上聊天，H5登录后也可查看聊天记录。在线用户列表，离线发送消息。

### 后台代码简单
前台代码配置统一，直接修改为自己后台地址，方便使用。
将后台代码分离，也就是专注聊天这一块，因为不少开发者只是要聊天这一块功能。后台没有做用户登录鉴权，开发者自己处理。
[后台代码](https://gitee.com/wuxq1985/chat_php)[主要业务代码](https://gitee.com/wuxq1985/chat_php/blob/master/ws/service/ChatNewService.php)

用户登录还是用的原来数据，这是另一个项目。大家可以自行参考后修改。
[用户登录](https://gitee.com/wuxq1985/wyx2013/blob/master/application/index/controller/Chat.php)以及相关的功能类，TP模型类。
服务器php7以上,redis,mysql/mariadb必须备，因小程序要HTTPS和WSS必须配好Nginx或Apache。推荐composer安装。如无法用Composer的可联系把文件发给你。
对服务器需求低，作者1G核阿里云，全配好运行也才50%内存，特别适合中小企业。

### 整体功能
1. 完成用户登录 ，支持多端同时在线。
2. 小程序登录，支持多端同时在线，即小程离绑定用户后，可在H5同时在线，接收消息
3. 服务端JWT后台用户认证加密（如测试时，最好不要打开JWT,或是自己完成验证。）
4. redis消息保存（可自定义保存前缀，不与现有key冲突）
5. 所有用户列表，在线用户列表
6. 添加好友功能，好友列表
7. 群聊/话题功能（待完成）
### 聊天功能
8. 文字聊天
9. 图片聊天
10. 语音聊天
11. 表情包聊天
### 消息记录
12. 新消息提醒（离线新消息提醒暂不支持）
13. 用户注销下线通知 （已完成 ）

### 更新[单独的更新日志 UpdateLog.md需在gitee上打开](./UpdateLog.md)
