import { Anchor, Button, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { useEffect, useState, type ReactNode } from 'react'
import classes from './App.module.css'
import { EMAIL_COLOR, PAGE_BACKGROUND } from './theme'

const STOAT_URL = 'https://stt.gg/VRXfXVcE'
const NEWSLETTER_URL = 'https://decjsul.substack.com'
const BASE = import.meta.env.BASE_URL

const ACTIONS = [
  {
    title: 'Join',
    text: 'Students can join us today using our forum on Stoat.',
    href: STOAT_URL,
  },
  {
    title: 'Newsletter',
    text: 'Anyone can get our newsletter through Substack.',
    href: NEWSLETTER_URL,
  },
  {
    title: 'Charter',
    text: 'Anyone can review our charter.',
    href: '#/charter',
  },
]

const CONTACTS = [
  {
    role: 'Board Chair',
    name: 'Declan Sullivan',
    email: 'declans@brattsgc.org',
    about: 'Schedules and plans meetings, runs broader community outreach, and holds collective votes.',
  },
  {
    role: 'Head of Communications',
    name: 'Alex Brown',
    email: 'alexb@brattsgc.org',
    about:
      'Manages communications between students, with the school administration, and resolves personal conflicts.',
  },
  {
    role: 'Board Vice Chair',
    name: 'Ajax Kolodziej',
    email: 'ajaxk@brattsgc.org',
    about:
      'Aids Chair and panel heads in scheduling, hosting meetings, student outreach, and other miscellaneous tasks.',
  },
  {
    role: 'Head Publisher',
    name: 'Oscar Vulte',
    email: 'oscarv@brattsgc.org',
    about: 'Runs and writes the newsletter and a majority of announcements, with some exceptions.',
  },
]

type CharterSection = {
  title: string
  parts: { heading: string; body: ReactNode }[]
}

const CHARTER: CharterSection[] = [
  {
    title: 'Section 1 - Organization',
    parts: [
      {
        heading: 'Purpose',
        body: 'The purpose of the Organization Board is not to lead the Brattleboro Student General Collective, but to keep it organized.',
      },
      {
        heading: 'Membership',
        body: 'The Organization Board is to be composed of seven members, with at least one being from each grade (nine through twelve) at Brattleboro Union High School. When a vacancy arises on the Board, the other members of the Board must collect and review applications, and decide the most fit candidate to fill the role. After being selected, they will formally join the Council at noon of the following day.',
      },
      {
        heading: 'Actions',
        body: 'The Board are the people who reach out to our supporters in the staff or community at large, hold and call for votes, organize student protests, and other necessary administrative tasks. In summary, they keep the Collective together, but do not make its decisions. A chair will be selected by the board to pick which board members will host votes and meetings. While they may select themselves, they should make sure each board member is being utilized.',
      },
    ],
  },
  {
    title: 'Section 2 - Panels',
    parts: [
      {
        heading: 'Purpose',
        body: 'Panels are to be created to accomplish the agenda items voted on by the members of the Collective at large. These panels will discuss and work towards accomplishing their specific item.',
      },
      {
        heading: 'Membership',
        body: 'Students may join up to two panels at a time. Members of the Organization Council may join no more than one panel at a time. There is to be no limit to how many students may be in one specific panel.',
      },
      {
        heading: 'Actions',
        body: 'Panel members do not have very many required actions. It is required, however, that they choose representatives to share out about their progress and what help they may need from the Collective at large. Panels may also independently meet with the administration, although it is encouraged that they have the backing of the Collective at large first.',
      },
    ],
  },
  {
    title: 'Section 3 - Student Delegations',
    parts: [
      {
        heading: 'Purpose',
        body: 'Student delegations are the Collective’s delegations to clubs, sports teams, and other student groups in or outside of school.',
      },
      {
        heading: 'Membership',
        body: 'There is no limit to how many student delegations a member of the Collective can serve as, however, the Collective should try to have at least one student in each existing student group.',
      },
      {
        heading: 'Actions',
        body: (
          <>
            Student delegates should use the Collective as a way to reach out to the student
            community. Student delegations should at first address their concerns with the
            administration to the Collective, so that they may receive proper backing. Overall,
            there are no <i>required</i> actions that student delegation members must take.
          </>
        ),
      },
    ],
  },
  {
    title: 'Section 4 - Admin Delegations',
    parts: [
      {
        heading: 'Purpose',
        body: 'To ensure transparency and student voice in decision making, the students’ should have at least one, ideally two, delegates on every staff committee. This should be a permanent goal of the Brattleboro Student General Collective.',
      },
      {
        heading: 'Membership',
        body: 'Any student who is willing may serve as a delegate to administrative committees, however, no student should serve as more than two delegates at the same time. Additionally, the student representative on the school board should only serve on one administrative committee at that time if they choose.',
      },
      {
        heading: 'Actions',
        body: 'These delegates should always ask for non-confidentiality in their committee meetings so that they may use the Collective as a way to share out about what was discussed, what may happen, and how their fellow students feel about the course of action of said committee.',
      },
    ],
  },
  {
    title: 'Section 5 - Bylaws',
    parts: [
      {
        heading: 'On Voting',
        body: 'All students always have the right to vote on matters of agenda or new bylaws of the Collective, however, some conditions must be met. Students must have been a member of the current communication method of the Collective for at least thirty-six hours prior to voting. Additionally, if the voting matter is deemed to only affect a certain group of individuals, the Organization Board may host a vote of only that particular group.',
      },
      {
        heading: 'On Unity',
        body: 'The Collective is not restricted in membership exclusively to students of Brattleboro Union High School, or to even Brattleboro\'s public schools. All students who attend a school in Brattleboro are permitted to join as full members, granted that they are in grades seven through twelve. If parents or community members would like to join, they may as restricted, non-voting members. Members of school staff or administration need special permission from the Organization Board to join as restricted, non-voting members.',
      },
      {
        heading: 'On Politics',
        body: 'Politics and political opinions not relating to the interests of the student population of Brattleboro, and biases that come with them, are not relevant to our cause, and should therefore not be discussed using our platform, and should not be involved at all in decision making.',
      },
      {
        heading: 'On Representation',
        body: (
          <>
            When sending an email, letter, or other form of formal communication on behalf of the
            Brattleboro Student General Collective, it is best to state that you are doing so. Our
            requests, for example, are stronger when those we are making them out to know they are{' '}
            <b>our</b> requests.
          </>
        ),
      },
    ],
  },
]

const pageVars = {
  '--page-background': PAGE_BACKGROUND,
  '--email-color': EMAIL_COLOR,
} as React.CSSProperties

function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

function SiteTitle() {
  return (
    <Group justify="center" wrap="nowrap" gap="md">
      <img
        src={`${BASE}logo.svg`}
        alt="BSGC logo"
        className={classes.logo}
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      <Title order={1} className={classes.title}>
        Brattleboro Student
        <br />
        General Collective
      </Title>
    </Group>
  )
}

function Home() {
  return (
    <Stack gap="xl">
      <SiteTitle />

      <div className={classes.narrow}>
        <Text fw={700}>What is the BSGC?</Text>
        <Text>
          We are a group of Brattleboro students with the goal of student voice and transparency in
          decision making in schools. We encourage <b>all students</b> to join the cause, for the
          student body is stronger together. Joining is not a large commitment, once you’ve signed
          up, you may do as little as vote, or as much as help to organize.
        </Text>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
        {ACTIONS.map(({ title, text, href }) => (
          <Stack key={title} gap="md" justify="space-between" align="center" className={classes.card}>
            <Stack gap={4} align="center">
              <Title order={3} className={classes.heading}>
                {title}
              </Title>
              <Text size="sm">{text}</Text>
            </Stack>
            <Button component="a" href={href} size="md">
              {title}
            </Button>
          </Stack>
        ))}
      </SimpleGrid>

      <Stack gap="xl" align="center" className={`${classes.center} ${classes.narrow}`}>
        <Stack gap={4} align="center">
          <Text fw={700}>Questions or concerns? Please feel free to reach out.</Text>
          <Text className={classes.small}>
            Please reach out to <Anchor href="mailto:info@brattsgc.org">info@brattsgc.org</Anchor>{' '}
            if you don’t have a specific person or role in mind, or don’t know which specific person is
            best to contact for your needs.
          </Text>
        </Stack>
      </Stack>

      <Stack gap="md" align="center" className={classes.center}>
        <Text fw={700}>Member Contact List:</Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" w="100%">
          {CONTACTS.map(({ role, name, email, about }) => (
            <Stack key={email} gap={4} align="center" className={classes.card}>
              <Text fw={700}>{role}</Text>
              <Text>{name}</Text>
              <Anchor href={`mailto:${email}`}>{email}</Anchor>
              <Text className={classes.small}>{about}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>

      <Group justify="center">
        <img
          src={`${BASE}seal.svg`}
          alt="BSGC seal"
          className={classes.seal}
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </Group>
    </Stack>
  )
}

function Charter() {
  return (
    <Stack gap="xl" className={classes.narrow}>
      <SiteTitle />
      <Title order={2} ta="center" className={classes.heading}>
        Charter
      </Title>
      {CHARTER.map(({ title, parts }) => (
        <Stack key={title} gap="sm">
          <Title order={3} ta="center" className={classes.heading}>
            {title}
          </Title>
          {parts.map(({ heading, body }) => (
            <div key={heading}>
              <Text fw={700} ta="center">
                {heading}
              </Text>
              <Text>{body}</Text>
            </div>
          ))}
        </Stack>
      ))}
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
      <Container size="md">{hash === '#/charter' ? <Charter /> : <Home />}</Container>
    </main>
  )
}

export default App
