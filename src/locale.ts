import { createContext, useContext } from 'react'

export type Locale = 'en' | 'zh'

export type LocaleCopy = {
  nav: {
    source: string
    language: string
    english: string
    chinese: string
  }
  hero: {
    chips: string[]
    subtitle: string
    description: string
    viewSource: string
    contact: string
  }
  sections: {
    provides: string
    authRequired: string
    authRequiredBody: string
    privacyTitle: string
    privacyBody: string
    authPurpose: string
    storedData: string
    privacySecurity: string
  }
  lists: {
    features: string[]
    authReasons: string[]
    handledData: string[]
    privacyPoints: string[]
  }
  footer: {
    rights: string
    contact: string
    github: string
  }
}

export type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  copy: LocaleCopy
  localeOptions: Array<{
    value: Locale
    label: string
  }>
}

export const localeStorageKey = 'netherlink-locale'

export const localeOptions: LocaleContextValue['localeOptions'] = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'zh',
    label: '中文',
  },
]

export const localeCopy: Record<Locale, LocaleCopy> = {
  en: {
    nav: {
      source: 'Source',
      language: 'Language',
      english: 'EN',
      chinese: '中文',
    },
    hero: {
      chips: ['Minecraft Java Edition mod', 'Server presence', 'OAuth device code login'],
      subtitle:
        'A Minecraft Java Edition server-side and client-side mod that extends the official friend list and peer-to-peer networking features introduced in Minecraft 26.2-snapshot-7.',
      description:
        'NetherLink helps authenticated Minecraft account owners authorize a dedicated server to act as their server presence host, publish availability, receive friend join requests, and support approved connection flows.',
      viewSource: 'View source code',
      contact: 'Contact developer',
    },
    sections: {
      provides: 'What NetherLink Provides',
      authRequired: 'Why Authentication Is Required',
      authRequiredBody:
        'Minecraft friend list, presence, and peer-to-peer signaling APIs require authenticated Minecraft Services access tokens. NetherLink uses Microsoft OAuth device code login and never asks for the account password.',
      privacyTitle: 'Authentication, Data, and Privacy',
      privacyBody:
        'User authorization is used only for Minecraft Services communication. NetherLink does not collect, upload, sell, or share user data with any third-party service operated by the mod author.',
      authPurpose: 'Authorization Purpose',
      storedData: 'Data Stored Locally',
      privacySecurity: 'Privacy and Security',
    },
    lists: {
      features: [
        'Add an Integrated Server sharing mode for single-player worlds.',
        'Allow approved friends to request and join shared worlds.',
        'Link a dedicated server with a Microsoft/Minecraft account.',
        'Publish dedicated server availability to the owner’s Minecraft friend list.',
      ],
      authReasons: [
        'Verify the Minecraft profile associated with the authorized account.',
        'Obtain Minecraft Services access tokens after explicit authorization.',
        'Publish server presence on behalf of the authorized account.',
        'Interact with Minecraft friend list, presence, and signaling services.',
      ],
      handledData: [
        'Microsoft refresh token',
        'Minecraft Services access token',
        'Token expiration timestamps',
        'Minecraft profile UUID and profile name',
        'Xbox user hash or related authentication metadata required for token exchange',
      ],
      privacyPoints: [
        'NetherLink never asks for or stores Microsoft account passwords.',
        'Login is performed through Microsoft’s official OAuth device code flow.',
        'Tokens are stored locally on the Minecraft server where the mod is installed.',
        'Authentication data is used only to communicate with Microsoft, Xbox Live, and Minecraft Services.',
      ],
    },
    footer: {
      rights: 'All rights reserved.',
      contact: 'Contact Us',
      github: 'GitHub',
    },
  },
  zh: {
    nav: {
      source: '源代码',
      language: '语言',
      english: 'EN',
      chinese: '中文',
    },
    hero: {
      chips: ['Minecraft Java 版模组', '服务器在线状态', 'OAuth 设备码登录'],
      subtitle:
        'NetherLink 是一个 Minecraft Java 版服务端与客户端模组，用于扩展 Minecraft 26.2-snapshot-7 引入的官方好友列表与点对点网络功能。',
      description:
        'NetherLink 帮助已认证的 Minecraft 账号所有者授权专用服务器作为服务器状态主机，发布可用状态，接收好友加入请求，并支持经过批准的连接流程。',
      viewSource: '查看源代码',
      contact: '联系开发者',
    },
    sections: {
      provides: 'NetherLink 提供的功能',
      authRequired: '为什么需要认证',
      authRequiredBody:
        'Minecraft 好友列表、在线状态和点对点信令 API 需要经过认证的 Minecraft Services 访问令牌。NetherLink 使用 Microsoft OAuth 设备码登录，并且不会要求输入账号密码。',
      privacyTitle: '认证、数据与隐私',
      privacyBody:
        '用户授权仅用于与 Minecraft Services 通信。NetherLink 不会收集、上传、出售或分享用户数据给模组作者运营的任何第三方服务。',
      authPurpose: '授权用途',
      storedData: '本地存储的数据',
      privacySecurity: '隐私与安全',
    },
    lists: {
      features: [
        '为单人世界添加 Integrated Server 分享模式。',
        '允许经过批准的好友请求并加入共享世界。',
        '将专用服务器与 Microsoft/Minecraft 账号关联。',
        '向所有者的 Minecraft 好友列表发布专用服务器可用状态。',
      ],
      authReasons: [
        '验证授权账号对应的 Minecraft 档案。',
        '在明确授权后获取 Minecraft Services 访问令牌。',
        '代表授权账号发布服务器在线状态。',
        '与 Minecraft 好友列表、在线状态和信令服务交互。',
      ],
      handledData: [
        'Microsoft 刷新令牌',
        'Minecraft Services 访问令牌',
        '令牌过期时间戳',
        'Minecraft 档案 UUID 和档案名称',
        '令牌交换所需的 Xbox 用户哈希或相关认证元数据',
      ],
      privacyPoints: [
        'NetherLink 绝不会要求或存储 Microsoft 账号密码。',
        '登录通过 Microsoft 官方 OAuth 设备码流程完成。',
        '令牌存储在安装该模组的 Minecraft 服务器本地。',
        '认证数据仅用于与 Microsoft、Xbox Live 和 Minecraft Services 通信。',
      ],
    },
    footer: {
      rights: '版权所有。',
      contact: '联系我们',
      github: 'GitHub',
    },
  },
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }

  return context
}
