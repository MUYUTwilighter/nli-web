# NetherLink

NetherLink is a Minecraft Java Edition server-side and client-side mod that extends the official friend list and
peer-to-peer networking features introduced in Minecraft 26.2-snapshot-7.

The project helps players share Minecraft worlds with friends more easily, and helps dedicated server owners publish
their server presence through Minecraft’s official social and presence systems.

Purpose NetherLink provides tools for authenticated Minecraft account owners to authorize a dedicated server to act as
their server presence host. After authorization, the server can use the account’s Minecraft Services token to publish
presence information, receive friend join requests, and allow approved friends to connect through supported Minecraft
networking flows.

## Main Features

- Add an “Integrated Server” sharing mode for single-player worlds.
- Automatically accept friend join requests when the host chooses NetherLink’s integrated sharing mode.
- Allow a dedicated server to be linked with a Microsoft/Minecraft account.
- Publish dedicated server availability to the owner’s Minecraft friend list.
- Use Minecraft Services authentication only after explicit account authorization.
- Store account tokens locally on the server for refresh and service access.

## Why Microsoft/Minecraft Authentication Is Needed

NetherLink needs Microsoft account authentication because Minecraft’s friend list, presence, and peer-to-peer signaling
APIs require authenticated Minecraft Services access tokens.

The mod does not request account passwords. It uses Microsoft OAuth device code login, where the user signs in through
Microsoft’s official login page and grants access explicitly.
Authentication is required to:

- Verify the Minecraft profile associated with the authorized account.
- Obtain Minecraft Services access tokens.
- Publish server presence on behalf of the authorized account.
- Interact with Minecraft friend and signaling services.

User Data Handled NetherLink may store the following data locally on the user’s Minecraft server:

- Microsoft refresh token
- Minecraft Services access token
- Token expiration timestamps
- Minecraft profile UUID
- Minecraft profile name
- Xbox user hash or related authentication metadata required for token exchange

NetherLink does not collect, upload, sell, or share user data with any third-party service operated by the mod author.
Authentication data is used only to communicate with Microsoft, Xbox Live, and Minecraft Services.

## Privacy And Security

- NetherLink never asks for or stores Microsoft account passwords.
- Login is performed through Microsoft’s official OAuth device code flow.
- Tokens are stored locally on the server where the mod is installed.
- Server administrators are responsible for protecting the server files containing tokens.
- Users can revoke access through their Microsoft account security settings.

- Home
- Features
- Authentication
- Privacy
- Contact / Support
- Source Code
  Contact / Support Placeholder
  Developer: MUYU_Twilighter
  Project: NetherLink
  Purpose: Minecraft Java Edition mod for friend list and P2P server presence integration
  Contact: [your email]
  Source Code: [GitHub repository URL]