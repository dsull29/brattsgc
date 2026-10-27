import { Button, Container, Group, Text, Title } from '@mantine/core'
import classes from './App.module.css'

// Placeholders: swap in the real URLs once they exist.
const SUBSTACK_URL = '#substack'
const STOUT_URL = '#stout'

function App() {
  return (
    <main className={classes.hero}>
      <Container size="md">
        <Title order={1} className={classes.title}>
          Brattleboro Student General Collective
        </Title>

        <Text size="lg" c="dimmed" mt="md" maw={560}>
          Placeholder: one or two sentences about who we are and what we do.
        </Text>

        <Group mt="xl" className={classes.actions}>
          <Button component="a" href={SUBSTACK_URL} size="md">
            Read the Substack
          </Button>
          <Button component="a" href={STOUT_URL} size="md" variant="outline">
            Join the Stout group
          </Button>
        </Group>
      </Container>
    </main>
  )
}

export default App
