import { Button, Container, Group, Stack, Text, Title } from '@mantine/core'

function App() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="md" align="flex-start">
        <Title order={1}>brattsgc</Title>
        <Text c="dimmed" size="lg">
          Vite + React + TypeScript with Mantine is up and running.
        </Text>
        <Group>
          <Button>Get started</Button>
          <Button variant="light">Learn more</Button>
        </Group>
      </Stack>
    </Container>
  )
}

export default App
