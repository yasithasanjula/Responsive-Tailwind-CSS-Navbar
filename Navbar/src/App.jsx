import { useState } from 'react'
import { Nav } from './Components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-900'>
        <Nav/>
      </div>
        
    </>
  )
}

export default App
