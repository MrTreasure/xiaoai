/**
 * @name Request 小爱发起的请求信息
 * @property { string } version 版本
 * @property { string } query 用户语音的识别结果
 * @property { Session } Session 一轮对话的相关信息
 * @property { Context } Context 上下文相关的信息
 * @property { Req } request 请求相关信息
 */
interface Request {
  version: string 
  query?: string
  session: Session
  context?: Context
  request: Req
}

/**
 * @name Session 一轮对话的相关信息
 * @property { string } session_id 唯一标识一轮session
 * @property { Application } Application 当前命中的技能
 * @property { JSON } attrbuites 可能需要持久化的数据，每次请求都会带上
 * @property { User } user 用户相关信息
 */
interface Session {
  session_id: string
  Application: Application
  attrbuites?: JSON
  user?: User
}

/**
 * @name Context 上下文相关的信息
 * @property { string } device_id 设备唯一标识，需要申请才会给到
 * @property { string } passport OAuth账号绑定的额外信息
 * @property { ClientAppinfo } app_info 客户端APP相关信息
 */
interface Context {
  device_id?: string
  passport?: string
  app_info: ClientAppinfo
}

/**
 * @name Req 请求相关信息
 * @property { number } type 请求的类型，分别标识，0：技能进入请求； 1：技能进行中请求;2：请求结束请求
 * @property { string } request_id 请求的唯一标识
 * @property { number } timestamp 时间戳
 * @property { boolean } no_response 是否用户没响应小爱（例如用户没有在小爱音箱旁边）
 * @property { string } event_type 事件类型（详见事件）
 * @property { EventProperty } event_property 事件的相关信息
 * @property { string } Locale 本地化设置
 * @property { SlotInfo } slot_info 意图信息（详见意图）
 */
interface Req {
  type: number
  request_id: string
  timestamp: number
  no_response?: boolean
  event_type?: string
  event_property?: EventProperty
  Locale: string
  slot_info?: SlotInfo
}

interface Application {
  app_id: string
}

/**
 * @name User 用户相关信息
 * @property { user_id } 用户唯一id，默认会对用户id进行加密，所以这个id不是真实的小米id，但是可以作为唯一标识
 * @property { access_token } 如果使用了OAuth进行账号绑定，这里存放用户绑定后获取的token
 */
interface User {
  user_id: string 
  access_token?: string
}

/**
 * @name ClientAppinfo
 * @property { string } pkg_name 包名
 * @property { number } version_code 版本号
 */
interface ClientAppinfo {
  pkg_name: string
  version_code: number
}

/**
 * @name EventProperty
 * @property { string } asr_text 录音的语音识别结果文本
 * @property { string } msg_file_id 录音所得的文件id
 */
interface EventProperty {
  asr_text?: string
  msg_file_id?: string
}

/**
 * @name SlotInfo
 * @property { string } intent_name 此次请求命中的意图名称
 * @property { boolean } is_confirmed 此命中的意图是否确认了，所谓意图确认是指上一轮命中了这个意图，假如开发者配置了意图确认，平台会要求用户确认一次，假如这次用户确认了，会将这个bool值设置为true
 * @property { Slot[] } slots 该意图提取出的所有槽位值
 */
interface SlotInfo {
  intent_name: string
  is_confirmed: boolean
  slots: Slot[]
}

/**
 * @name Slot
 * @property { string } name 槽位名称
 * @property { string } value 提取出的槽位值，例如city槽位可能提取的值是北京
 * @property { boolean } is_inquire_failed 追问超过开发者设置的次数会通过这个值告诉开发者。 什么是追问以及怎么设置最大值详见这里
 */
interface Slot {
  name: string
  value?: string
  is_inquire_failed: boolean
}

export default Request