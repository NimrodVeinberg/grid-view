import GridLayout from "./components/GridLayout/GridLayout"

import './app.css'
import { GridProvider } from "./context/gridContext"

export function App() {

  return (
    <>
      <GridProvider>
        <GridLayout />
      </GridProvider>
    </>
  )
}
