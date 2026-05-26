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
    terms: string
    clientAccountUse: string
    serverAccountUse: string
    serverCommands: string
  }
  lists: {
    clientFeatures: string[]
    serverFeatures: string[]
    clientSteps: string[]
    serverSteps: string[]
    terms: string[]
    clientAccountUse: string[]
    serverAccountUse: string[]
    serverCommands: Array<{
      command: string
      description: string
    }>
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
        'A Minecraft Java Edition mod that enhances the official P2P networking and friend-list support introduced in Minecraft 26.2-snapshot-7.',
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
      terms: 'Terms and Account Safety',
      clientAccountUse: 'Client Account Use',
      serverAccountUse: 'Server Account Use and Storage',
      serverCommands: 'Server Commands',
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
      terms: [
        'Only run /nli add on a server you own or fully trust. We can only guarantee that NetherLink itself will not perform malicious actions with login information stored on the server; we are not responsible for account security issues or disputes caused by the server environment, administrators, other mods, plugins, malware, backups, leaks, or any other factors outside NetherLink.',
        '/nli add links a Microsoft/Minecraft account to that server through device-code login.',
        'A server administrator with file access may be able to access stored account files, so do not authorize your account on an untrusted public server.',
        'Use /nli revoke or /nli remove when you no longer want that server to publish presence or keep the stored account.',
      ],
      clientAccountUse: [
        'On the client, NetherLink uses the Minecraft account already logged into your game client.',
        'The client-side mod uses that account session for integrated-world sharing, friend-list joinability, and presence behavior while sharing.',
        'The client-side mod does not use /nli add and does not store an additional Microsoft refresh token for server publishing.',
      ],
      serverAccountUse: [
        'On a dedicated server, /nli add authorizes the Microsoft/Minecraft account you choose through Microsoft device-code login.',
        'The server uses that account to refresh Minecraft Services access, publish the server as a joinable presence, and accept P2P join requests.',
        'The server stores account data under netherlink/accounts, including refresh/access token data, token expiration data, Minecraft profile UUID/name, and related authentication metadata required for token exchange.',
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
        'NetherLink 是一个 Minecraft Java 版模组，用于增强 Minecraft 26.2-snapshot-7 引入的官方 P2P 网络与好友列表支持。',
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
      terms: '使用条款与账号安全',
      clientAccountUse: '客户端账号使用',
      serverAccountUse: '服务端账号使用与存储',
      serverCommands: '服务端命令',
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
      terms: [
        '只在你自己拥有或完全信任的服务器上运行 /nli add。我们只能保证 NetherLink 本身不会对服务端存储的登录信息进行任何恶意行为；对于服务端环境、管理员、其他模组、插件、恶意软件、备份、泄露或任何 NetherLink 之外因素导致的账号安全问题与纠纷，我们概不负责。',
        '/nli add 会通过设备码登录将一个 Microsoft/Minecraft 账号授权给该服务器。',
        '拥有服务器文件访问权限的管理员可能可以访问已存储的账号文件，因此不要在不可信的公共服务器上授权你的账号。',
        '当你不再希望该服务器发布状态或保留账号时，请使用 /nli revoke 或 /nli remove。',
      ],
      clientAccountUse: [
        '在客户端，NetherLink 使用你已经登录到游戏客户端的 Minecraft 账号。',
        '客户端模组会使用该账号会话来支持集成世界分享、好友列表可加入状态以及分享时的在线状态行为。',
        '客户端模组不会使用 /nli add，也不会为了服务端发布功能额外存储 Microsoft 刷新令牌。',
      ],
      serverAccountUse: [
        '在专用服务器上，/nli add 会通过 Microsoft 设备码登录授权你选择的 Microsoft/Minecraft 账号。',
        '服务器会使用该账号刷新 Minecraft Services 访问权限、将服务器发布为可加入状态，并接受 P2P 加入请求。',
        '服务器会在 netherlink/accounts 下存储账号数据，包括刷新/访问令牌数据、令牌过期数据、Minecraft 档案 UUID/名称，以及令牌交换所需的相关认证元数据。',
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
