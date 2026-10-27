import { Button, Container, Text, Title } from '@mantine/core'
import classes from './App.module.css'

// Placeholders: swap in the real URLs once they exist.
const SUBSTACK_URL = '#substack'
const STOUT_URL = '#stout'

function App() {
  return (
    <main className={classes.page}>
      <Container size="lg" className={classes.inner}>
        <header className={classes.masthead}>
          <span>Brattleboro, Vt.</span>
          <span className={classes.mastheadMid}>No. 001</span>
          <span>Est. 2026</span>
        </header>

        <section className={classes.hero}>
          <div className={classes.stamp} aria-hidden="true">
            <span>SGC</span>
            <small>student-run</small>
          </div>

          <Title order={1} className={classes.title}>
            Brattleboro
            <br />
            Student{' '}
            <span className={classes.marked}>General</span>
            <br />
            Collective
          </Title>

          <Text className={classes.lede}>
            Placeholder: one or two sentences about who we are and why you
            should show up. Keep it short, say it like you mean it.
          </Text>

          <div className={classes.actions}>
            <Button
              component="a"
              href={SUBSTACK_URL}
              className={classes.btnPrimary}
              size="lg"
            >
              Read the Substack &rarr;
            </Button>
            <Button
              component="a"
              href={STOUT_URL}
              className={classes.btnSecondary}
              size="lg"
            >
              Join the Stout group &rarr;
            </Button>
          </div>
        </section>

        <footer className={classes.footer}>
          <span>&#9632; made in Brattleboro</span>
          <span>meet / read / organize</span>
        </footer>
      </Container>
    </main>
  )
}

export default App
