### 目录
- chat_init.js	聊天室初始化混入，主要业务是登录聊天室和断线重连功能，当页面进入后，如果有登录聊天室，全执行一次pageInit(),断线重连后也会执行一次。

   - 初始化用户信息到vuex里，websocket连接后的，登录聊天室和断线重连功能
   - 这里有一个重要的方法封装，就是发消息的功能。只要是与websocket通信，都需要此功能。
- chat_record.js 主要是做聊天记录功能，暂不更新
- chat_send.js 主要是对话用的一些方式。
   - goChat 进入私聊
   - uploadFile 上传文件
   - sendImage 发送图片信息
   - getImage 取得图片信息

### ../user.js 在集成项目时，可以对字段进行转换，