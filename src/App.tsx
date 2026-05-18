import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import KeyRoundedIcon from '@mui/icons-material/KeyRounded'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import MailRoundedIcon from '@mui/icons-material/MailRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded'
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9d4edd',
      light: '#c77dff',
      dark: '#5a189a',
    },
    secondary: {
      main: '#80ffdb',
    },
    background: {
      default: '#0b0f14',
      paper: '#121821',
    },
    text: {
      primary: '#f7f8fb',
      secondary: '#a9b4c2',
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.02,
    },
    h2: {
      fontWeight: 760,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 720,
      letterSpacing: 0,
    },
    h6: {
      fontWeight: 760,
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
  },
})

const features = [
  'Add an Integrated Server sharing mode for single-player worlds.',
  'Allow approved friends to request and join shared worlds.',
  'Link a dedicated server with a Microsoft/Minecraft account.',
  'Publish dedicated server availability to the owner’s Minecraft friend list.',
]

const authReasons = [
  'Verify the Minecraft profile associated with the authorized account.',
  'Obtain Minecraft Services access tokens after explicit authorization.',
  'Publish server presence on behalf of the authorized account.',
  'Interact with Minecraft friend list, presence, and signaling services.',
]

const handledData = [
  'Microsoft refresh token',
  'Minecraft Services access token',
  'Token expiration timestamps',
  'Minecraft profile UUID and profile name',
  'Xbox user hash or related authentication metadata required for token exchange',
]

const privacyPoints = [
  'NetherLink never asks for or stores Microsoft account passwords.',
  'Login is performed through Microsoft’s official OAuth device code flow.',
  'Tokens are stored locally on the Minecraft server where the mod is installed.',
  'Authentication data is used only to communicate with Microsoft, Xbox Live, and Minecraft Services.',
]

function InfoCard({
                    icon,
                    title,
                    children,
                  }: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: '100%',
        p: {xs: 2.5, md: 3},
        borderColor: 'rgba(255,255,255,0.12)',
        bgcolor: 'rgba(18,24,33,0.82)',
      }}
    >
      <Stack spacing={1.5}>
        <Box
          sx={{
            width: 42,
            height: 42,
            display: 'grid',
            placeItems: 'center',
            borderRadius: 1.5,
            color: 'secondary.main',
            bgcolor: 'rgba(128,255,219,0.1)',
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6">{title}</Typography>
        {children}
      </Stack>
    </Paper>
  )
}

function CheckedList({items}: { items: string[] }) {
  return (
    <List disablePadding>
      {items.map((item) => (
        <ListItem key={item} disableGutters sx={{alignItems: 'flex-start', py: 0.75}}>
          <ListItemIcon sx={{minWidth: 32, color: 'secondary.main', pt: 0.25}}>
            <CheckCircleRoundedIcon fontSize="small"/>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography color="text.secondary" sx={{lineHeight: 1.55}}>
                {item}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box sx={{minHeight: '100vh', bgcolor: 'background.default'}}>
        <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
          sx={{
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(18px)',
            bgcolor: 'rgba(11,15,20,0.78)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{gap: 2}}>
              <Box component="img" src="/favicon.png" alt="" sx={{width: 36, height: 36}}/>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                NetherLink
              </Typography>
              <Button
                href="https://github.com/MUYUTwilighter/NetherLink"
                target="_blank"
                rel="noreferrer"
                color="inherit"
                startIcon={<GitHubIcon/>}
                sx={{display: {xs: 'none', sm: 'inline-flex'}}}
              >
                Source
              </Button>
            </Toolbar>
          </Container>
        </AppBar>

        <Box
          component="main"
          sx={{
            overflow: 'hidden',
            background:
              'radial-gradient(circle at 18% 8%, rgba(157,78,221,0.28), transparent 32%), radial-gradient(circle at 86% 4%, rgba(128,255,219,0.14), transparent 30%)',
          }}
        >
          <Container maxWidth="lg" sx={{py: {xs: 7, md: 10}}}>
            <Grid container spacing={{xs: 5, md: 8}} sx={{alignItems: 'center'}}>
              <Grid size={{xs: 12, md: 7}}>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={1} useFlexGap sx={{flexWrap: 'wrap'}}>
                    <Chip label="Minecraft Java Edition mod" color="primary"/>
                    <Chip label="Server presence" variant="outlined"/>
                    <Chip label="OAuth device code login" variant="outlined"/>
                  </Stack>
                  <Typography variant="h1" sx={{fontSize: {xs: 44, sm: 58, md: 76}}}>
                    NetherLink
                  </Typography>
                  <Typography variant="h5" color="text.secondary" sx={{lineHeight: 1.55}}>
                    A Minecraft Java Edition server-side and client-side mod that extends the
                    official friend list and peer-to-peer networking features introduced in
                    Minecraft 26.2-snapshot-7.
                  </Typography>
                  <Typography color="text.secondary" sx={{lineHeight: 1.7}}>
                    NetherLink helps authenticated Minecraft account owners authorize a dedicated
                    server to act as their server presence host, publish availability, receive friend
                    join requests, and support approved connection flows.
                  </Typography>
                  <Stack direction={{xs: 'column', sm: 'row'}} spacing={1.5}>
                    <Button
                      href="https://github.com/MUYUTwilighter/NetherLink"
                      target="_blank"
                      rel="noreferrer"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForwardRoundedIcon/>}
                    >
                      View source code
                    </Button>
                    <Button
                      href="mailto:1484605372@qq.com"
                      variant="outlined"
                      size="large"
                      startIcon={<MailRoundedIcon/>}
                    >
                      Contact developer
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{xs: 12, md: 5}}>
                <Box
                  sx={{
                    minHeight: {xs: 300, md: 420},
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src="/netherlink.png"
                    alt="NetherLink project icon"
                    sx={{
                      width: 'min(100%, 390px)',
                      height: 'auto',
                      filter: 'drop-shadow(0 28px 60px rgba(157,78,221,0.34))',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>

          <Divider sx={{borderColor: 'rgba(255,255,255,0.08)'}}/>

          <Container maxWidth="lg" sx={{py: {xs: 6, md: 9}}}>
            <Grid container spacing={3}>
              <Grid size={{xs: 12, md: 6}}>
                <InfoCard icon={<PublicRoundedIcon/>} title="What NetherLink Provides">
                  <CheckedList items={features}/>
                </InfoCard>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <InfoCard icon={<KeyRoundedIcon/>} title="Why Authentication Is Required">
                  <Typography color="text.secondary" sx={{lineHeight: 1.7}}>
                    Minecraft friend list, presence, and peer-to-peer signaling APIs require
                    authenticated Minecraft Services access tokens. NetherLink uses Microsoft OAuth
                    device code login and never asks for the account password.
                  </Typography>
                </InfoCard>
              </Grid>
            </Grid>
          </Container>

          <Box sx={{bgcolor: 'rgba(255,255,255,0.025)'}}>
            <Container maxWidth="lg" sx={{py: {xs: 6, md: 9}}}>
              <Grid container spacing={{xs: 4, md: 6}}>
                <Grid size={{xs: 12, md: 5}}>
                  <Stack spacing={2}>
                    <Typography variant="h2" sx={{fontSize: {xs: 32, md: 44}}}>
                      Authentication, Data, and Privacy
                    </Typography>
                    <Typography color="text.secondary" sx={{lineHeight: 1.75}}>
                      User authorization is used only for Minecraft Services communication. NetherLink
                      does not collect, upload, sell, or share user data with any third-party service
                      operated by the mod author.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid size={{xs: 12, md: 7}}>
                  <Grid container spacing={3}>
                    <Grid size={{xs: 12, sm: 6}}>
                      <InfoCard icon={<SecurityRoundedIcon/>} title="Authorization Purpose">
                        <CheckedList items={authReasons}/>
                      </InfoCard>
                    </Grid>
                    <Grid size={{xs: 12, sm: 6}}>
                      <InfoCard icon={<StorageRoundedIcon/>} title="Data Stored Locally">
                        <CheckedList items={handledData}/>
                      </InfoCard>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Container maxWidth="lg" sx={{py: {xs: 6, md: 9}}}>
            <InfoCard icon={<LockRoundedIcon/>} title="Privacy and Security">
              <CheckedList items={privacyPoints}/>
            </InfoCard>
          </Container>
        </Box>

        <Box
          component="footer"
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            bgcolor: '#080b10',
            py: 3,
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction={{xs: 'column', md: 'row'}}
              spacing={1.5}
              useFlexGap
              sx={{
                alignItems: {xs: 'flex-start', md: 'center'},
                justifyContent: 'space-between',
              }}
            >
              <Stack direction="row" spacing={1.5} useFlexGap sx={{flexWrap: 'wrap'}}>
                <Typography>
                  © 2026
                  <Link href="https://muyucloud.cool" target="_blank" rel="noreferrer" underline="hover" sx={{pl: 1}}>
                    暮宇_Twilighter
                  </Link>
                  . All rights reserved.
                </Typography>
                <Link href="mailto:1484605372@qq.com" underline="hover" color="text.secondary">
                  Contact Us
                </Link>
                <Link
                  href="https://github.com/MUYUTwilighter/NetherLink"
                  target="_blank"
                  rel="noreferrer"
                  underline="hover"
                  color="text.secondary"
                >
                  GitHub
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} useFlexGap sx={{flexWrap: 'wrap'}}>
                <Link
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noreferrer"
                  color="text.secondary"
                  underline="hover"
                >
                  皖ICP备2026011109号
                </Link>
                <Stack direction="row" spacing={0.75} sx={{alignItems: 'center'}}>
                  <Box component="img" src="/police.png" alt="" sx={{width: 18, height: 18}}/>
                  <Link
                    href="https://beian.mps.gov.cn/#/query/webSearch?code=%E7%9A%96%E5%85%AC%E7%BD%91%E5%AE%89%E5%A4%8734150202000503%E5%8F%B7"
                    target="_blank"
                    rel="noreferrer"
                    color="text.secondary"
                    underline="hover"
                  >
                    皖公网安备34150202000503号
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
