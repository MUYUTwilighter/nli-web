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
    subtitle: string
    description: string
    downloadModrinth: string
    downloadCurseForge: string
    viewSource: string
    contact: string
  }
  sections: {
    clientFeatures: string
    serverFeatures: string
    clientUsage: string
    serverUsage: string
    serverCommands: string
    accountStorage: string
    authRequired: string
    authRequiredBody: string
    privacyTitle: string
    privacyBody: string
    authPurpose: string
    storedData: string
    privacySecurity: string
  }
  lists: {
    clientFeatures: string[]
    serverFeatures: string[]
    clientSteps: string[]
    serverSteps: string[]
    serverCommands: Array<{
      command: string
      description: string
    }>
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
      subtitle:
        'A released Minecraft Java Edition mod that enhances the official P2P networking and friend-list support introduced in Minecraft 26.2-snapshot-7.',
      description:
        'NetherLink adds an Integrated Server sharing mode for clients and lets dedicated servers publish their availability to the owner’s Minecraft friend list after Microsoft/Minecraft account authorization.',
      downloadModrinth: 'Download on Modrinth',
      downloadCurseForge: 'Download on CurseForge',
      viewSource: 'View source code',
      contact: 'Contact developer',
    },
    sections: {
      clientFeatures: 'Client Features',
      serverFeatures: 'Server Features',
      clientUsage: 'How to Use on Client',
      serverUsage: 'How to Use on Server',
      serverCommands: 'Server Commands',
      accountStorage: 'Account Storage',
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
      clientFeatures: [
        'For Minecraft 26.1.2 or older, enables the full official P2P feature set.',
        'Add an Integrated Server sharing mode for single-player worlds.',
        'Let friends in the Minecraft friend list join the shared world without a manual approval prompt.',
        'Stop normal client presence broadcasts except “In a joinable world” to avoid conflicts with hosted server presence.',
      ],
      serverFeatures: [
        'Link a dedicated server with a Microsoft/Minecraft account.',
        'Publish dedicated server availability to the owner’s Minecraft friend list.',
        'Accept incoming P2P join requests and route them into the running server.',
        'Optionally use a custom authentication APP ID through the NETHERLINK_CLIENT_ID environment variable.',
      ],
      clientSteps: [
        'Install NetherLink on the client.',
        'Launch the game and open a single-player world.',
        'Open the multiplayer sharing screen.',
        'Select Integrated Server as the sharing mode.',
      ],
      serverSteps: [
        'Install NetherLink on the server.',
        'Optionally set NETHERLINK_CLIENT_ID if you want to use your own APP ID for authentication.',
        'Start the server and run /nli add.',
        'Open the login URL shown in chat or the server console and complete Microsoft authentication.',
        'Run /nli list to check configured accounts and token status.',
        'Run /nli publish to publish the server to the account owner’s Minecraft friend list.',
      ],
      serverCommands: [
        {
          command: '/nli add',
          description: 'Add a Microsoft/Minecraft account through device-code login.',
        },
        {
          command: '/nli list',
          description: 'Show configured accounts and token status.',
        },
        {
          command: '/nli refresh [all|<name>]',
          description: 'Refresh stored account tokens.',
        },
        {
          command: '/nli publish [all|<name>]',
          description: 'Publish server presence and start accepting P2P joins.',
        },
        {
          command: '/nli revoke [all|<name>]',
          description: 'Revoke server presence and stop accepting P2P joins for the account.',
        },
        {
          command: '/nli toggle <name>',
          description: 'Enable or disable an account.',
        },
        {
          command: '/nli remove <name>',
          description: 'Remove a stored account.',
        },
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
        'Account data is stored locally under netherlink/accounts on the Minecraft server.',
        'Authentication data is used only to communicate with Microsoft, Xbox Live, and Minecraft Services.',
        'Treat account files as credentials and do not share them publicly.',
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
      subtitle:
        'NetherLink 是一个已发布的 Minecraft Java 版模组，用于增强 Minecraft 26.2-snapshot-7 引入的官方 P2P 网络与好友列表支持。',
      description:
        'NetherLink 为客户端添加 Integrated Server 分享模式，并允许专用服务器在完成 Microsoft/Minecraft 账号授权后，将服务器可用状态发布到账号所有者的 Minecraft 好友列表。',
      downloadModrinth: '在 Modrinth 下载',
      downloadCurseForge: '在 CurseForge 下载',
      viewSource: '查看源代码',
      contact: '联系开发者',
    },
    sections: {
      clientFeatures: '客户端功能',
      serverFeatures: '服务端功能',
      clientUsage: '客户端使用方式',
      serverUsage: '服务端使用方式',
      serverCommands: '服务端命令',
      accountStorage: '账号数据存储',
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
      clientFeatures: [
        '对于 Minecraft 26.1.2 或更早版本，启用完整的官方 P2P 功能集。',
        '为单人世界添加 Integrated Server 分享模式。',
        '允许经过批准的好友请求并加入共享世界。',
        '除“In a joinable world”外停止普通客户端在线状态广播，避免与托管服务器状态冲突。',
      ],
      serverFeatures: [
        '将专用服务器与 Microsoft/Minecraft 账号关联。',
        '向所有者的 Minecraft 好友列表发布专用服务器可用状态。',
        '接受传入的 P2P 加入请求，并将其路由到正在运行的服务器。',
        '可通过 NETHERLINK_CLIENT_ID 环境变量使用自己的认证 APP ID。',
      ],
      clientSteps: [
        '在客户端安装 NetherLink。',
        '启动游戏并打开一个单人世界。',
        '打开多人游戏分享界面。',
        '选择 Integrated Server 作为分享模式。',
      ],
      serverSteps: [
        '在服务器安装 NetherLink。',
        '如需使用自己的认证 APP ID，可设置 NETHERLINK_CLIENT_ID。',
        '启动服务器并运行 /nli add。',
        '打开聊天栏或服务器控制台中显示的登录 URL，并完成 Microsoft 认证。',
        '运行 /nli list 检查已配置账号和令牌状态。',
        '运行 /nli publish 将服务器发布到账号所有者的 Minecraft 好友列表。',
      ],
      serverCommands: [
        {
          command: '/nli add',
          description: '通过设备码登录添加 Microsoft/Minecraft 账号。',
        },
        {
          command: '/nli list',
          description: '显示已配置账号和令牌状态。',
        },
        {
          command: '/nli refresh [all|<name>]',
          description: '刷新已存储的账号令牌。',
        },
        {
          command: '/nli publish [all|<name>]',
          description: '发布服务器状态并开始接受 P2P 加入。',
        },
        {
          command: '/nli revoke [all|<name>]',
          description: '撤销服务器状态并停止接受该账号的 P2P 加入。',
        },
        {
          command: '/nli toggle <name>',
          description: '启用或禁用账号。',
        },
        {
          command: '/nli remove <name>',
          description: '移除已存储账号。',
        },
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
        '账号数据存储在 Minecraft 服务器本地的 netherlink/accounts 目录下。',
        '认证数据仅用于与 Microsoft、Xbox Live 和 Minecraft Services 通信。',
        '请将账号文件视为凭据，不要公开分享。',
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
