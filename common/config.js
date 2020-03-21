//webSocket地址
export const SocketUrl='ws://39.101.185.133:8202'
//webSocket 使用的操作模块
export const SocketModul='ChatNewService'

/* 后台地址主要用于登录、注册、修改信息、图片上传、语音上传等 */
//后台公共地址chat.cc
export const BaseUrl='http://39.101.185.133'
// 应用模块地址（二级目录）如果是public请填写‘/public/’
export const ModuleUrl='/'
// 小程序登录鉴权网址
export const MpWeiXinAuth = BaseUrl+ModuleUrl+'index/chat/chatMiniProgramUser?id=2'
// 注册用户登录网址
export const AdminUserLogin = BaseUrl+ModuleUrl+'index/Chat/chatWebUser'
// 用户注册页面
export const AdminUserRegister =  BaseUrl+ModuleUrl+'index/Chat/register'
// 检测username是否存在页面
export const CheckUserName = BaseUrl+ModuleUrl+'index/Chat/checkUserName'
// 修改用户信息页面
export const updataUserInfo = BaseUrl+ModuleUrl+'index/Chat/updataUserInfo'
// 上传文件件
export const UploadFile = BaseUrl+ModuleUrl+'index/Chat/uploadFile'
// 新建群聊房间
export const BuildChatRoom = BaseUrl+ModuleUrl+'index/Chat/buildChatRoom'
// 取得用户所加入的房间号
export const GetChatRooms = BaseUrl+ModuleUrl+'index/Chat/getChatRooms'
export default {
	SocketUrl,
	SocketModul,
	BaseUrl,
	ModuleUrl,
	MpWeiXinAuth,
	AdminUserLogin,
	CheckUserName,
	UploadFile,
	BuildChatRoom,
}