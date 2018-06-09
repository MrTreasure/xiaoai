/**
 * @name Response 开发者返回给小爱技能开放平台的接口定义
 * @property { JSON } session_attributes 期望小爱技能平台帮忙持久化的jsobject
 * @property { boolean } is_session_end 是否结束当前会话
 * @property { Res } response 返回的具体信息
 */
interface Response {
  version: string
  session_attributes?: JSON
  is_session_end: boolean
  response: Res
}

/**
 * @name Res
 * @property { ToSpeak } to_speak tts要说的话，通常简单的回复可以使用这个字段
 * @property { ToDisplay } to_display 有屏设备显示的数据
 * @property { Directives[] } directives 设备的复杂操作通常放在这里，例如多句tts，url音频播放等
 * @property { boolean } open_mic 是否需要开麦（相关指导建议详见最佳实践），默认不开麦
 * @property { boolean } not_understand 是否理解用户的请求，具体作用详见最佳实践
 * @property { string } action 动作，详见动作页
 * @property { ActionProperty } action_property 	动作属性
 * @property { RegisterEvent[] } register_events 需要注册的事件类型（详见事件和动作页）
 */
interface Res {
  to_speak?: ToSpeak
  to_display?: ToDisplay
  directives?: Directives[]
  open_mic?: boolean
  not_understand?: boolean
  action?: string
  action_property?: ActionProperty
  register_events?: RegisterEvent[]
}

/**
 * @name ToSpeak
 */
interface ToSpeak {
  type: number
  text: string
}

/**
 * @name ToDisplay
 * @property { number } type 显示类型，目前支持0：文字，1：html，2：native ui，3：widgets，目前主要用在电视和手机等有屏设备
 * @property { string } url 假如显示html则通过这个链接指定
 * @property { string } text 显示的文字
 * @property { UITemplate } ui_template 显示的模板，有屏设备支持一些显示模板，可以通过这个配置
 */
interface ToDisplay {
  type: number
  url?: string
  text?: string
  ui_template?: UITemplate
}

/**
 * @name Directives
 * @property { string } type 动作的类型，audio播放音频，tts播放文字
 * @property { AudioItem } 音频内容
 * @property { TTSitem } tts_item Tts内容
 */
interface Directives {
  type: string
  audio_item?: AudioItem
  tts_item?: TTSitem
}

/**
 * @name ActionProperty
 * @property { string[] } file_id_list 要播放的文件id，用于play_msg动作
 */
interface ActionProperty {
  file_id_list: string[]
}

/**
 * @name RegisterEvent
 * @property { string } event_name 事件名称，目前仅支持：mediaplayer.playbacknearlyfinished
 */
interface RegisterEvent {
  event_name: string
}

/**
 * @name UITemplate
 * @property { string } image_style 图片的样式
 * @property { string[] } images 图片列表
 * @property { string } intent 响应点击事件
 * @property { string } title 标题
 * @property { JSON } body 主题内容
 * @property { string } background_image 背景图片
 */
interface UITemplate {
  image_style?: string
  images?: string[]
  intent?: string
  title?: string
  body?: JSON
  background_image?: string
}

/**
 * @name AudioItem
 * @property { AudioStream } stream 音频流
 */
interface AudioItem {
  stream: AudioStream
}

/**
 * @name TTSitem
 * @property { string } type Tts的类型，目前仅支持0：普通文本
 * @property { string } text 文本内容
 */
interface TTSitem {
  type: string
  text?: string
}

/**
 * @name AudioStream
 * @property { string } token 播放资源鉴权用的token
 * @property { string } url 	播放地址
 * @property { number } offset_in_milliesonds 偏移地址
 */
interface AudioStream {
  token?: string
  url: string
  offset_in_milliesonds?: number
}

export default Response