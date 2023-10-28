import { Badges } from './components/badges'
import { Buttons } from './components/button'
import { Dividers } from './components/dividers'
import { Typography } from './components/typography'

function App () {
  return (
    <main className="container max-w-4xl mx-auto">
      <Badges />
      <Buttons />
      <Dividers />
      <Typography />
    </main>
  )
}

export default App
