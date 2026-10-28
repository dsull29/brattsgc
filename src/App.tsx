import { Anchor, Button, Container, Group, Stack, Text, Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import classes from './App.module.css'
import { PAGE_BACKGROUND, TITLE_COLOR } from './theme'

const STOAT_URL = 'https://stt.gg/VRXfXVcE'
const NEWSLETTER_URL = 'https://decjsul.substack.com'

const CONTACTS = [
  { label: 'General Concerns', email: 'info@brattsgc.org' },
  { label: 'Board Chair Declan Sullivan', email: 'declans@brattsgc.org' },
  { label: 'Head Publisher Oscar Vulte', email: 'oscarv@brattsgc.org' },
]

// Placeholder: paste the real charter text here.
const CHARTER_TEXT = 'The BSGC charter will be displayed here.'

const pageVars = {
  '--page-background': PAGE_BACKGROUND,
  '--title-color': TITLE_COLOR,
} as React.CSSProperties

function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

function SiteTitle() {
  return (
    <Title order={1} className={classes.title}>
      Brattleboro Student
      <br />
      General Collective
    </Title>
  )
}

function Home() {
  return (
    <Stack gap="xl">
      <SiteTitle />

      <div>
        <Text fw={700}>What is the BSGC?</Text>
        <Text>
          We are a group of Brattleboro students with the goal of student voice and transparency in
          decision making in schools. We encourage <b>all students</b> to join the cause, for the
          student body is stronger together. Joining is not a large commitment, once you’ve signed
          up, you may do as little as vote, or as much as help to organize.
        </Text>
      </div>

      <Stack gap="xl" align="center" className={classes.center}>
        <Stack gap="xs" align="center">
          <Text size="lg">Students can join us today using our forum on Stoat:</Text>
          <Button component="a" href={STOAT_URL} size="md">
            Join
          </Button>
        </Stack>

        <Stack gap="xs" align="center">
          <Text size="lg">Anyone can get our newsletter through Substack:</Text>
          <Button component="a" href={NEWSLETTER_URL} size="md">
            Newsletter
          </Button>
        </Stack>

        <Stack gap="xs" align="center">
          <Text size="lg">Read our charter:</Text>
          <Button component="a" href="#/charter" size="md">
            Charter
          </Button>
        </Stack>

        <Stack gap={4} align="center">
          <Text>Questions or concerns? Please feel free to reach out.</Text>
          <Text className={classes.small}>
            Please reach out to <Anchor href="mailto:info@brattsgc.org">info@brattsgc.org</Anchor>{' '}
            if you don’t have a specific person in mind, or don’t know which specific person is best
            for your needs.
          </Text>
        </Stack>

        <Stack gap={2} align="center">
          {CONTACTS.map(({ label, email }) => (
            <Text key={email}>
              {label} - <Anchor href={`mailto:${email}`}>{email}</Anchor>
            </Text>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

function Charter() {
  return (
    <Stack gap="xl">
      <SiteTitle />
      <Title order={2} ta="center" className={classes.back}>
        Charter
      </Title>
      <Text className={classes.charter}>{CHARTER_TEXT}</Text>
      <Group justify="center">
        <Button component="a" href="#" variant="outline">
          Back
        </Button>
      </Group>
    </Stack>
  )
}

function App() {
  const hash = useHash()
  return (
    <main className={classes.page} style={pageVars}>
      <Container size="sm">{hash === '#/charter' ? <Charter /> : <Home />}</Container>
    </main>
  )
}

export default App
