import React, { useState } from 'react';
import Couters from './components/couters';
import Navbar from './components/navbar';
import uuid from 'uuid'

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 3 },
  ])

  const addCouters = () => {
    let cc = { id: uuid.v4(), value: 0 }
    setCounters([...counters, cc])
  }


  const handleIncrement = (counter) => {
    let cc = [...counters]
    let index = counters.indexOf(counter)
    cc[index].value++
    setCounters(cc)

  }
  const handleDecrement = (counter) => {
    let cc = [...counters]
    let index = counters.indexOf(counter)
    cc[index].value--
    setCounters(cc)
  }

  const handleDelet = (countId) => {
    let cc = counters.filter(c => c.id !== countId)
    setCounters(cc)
  }

  const handleReset = () => {
    let cc = counters.map(c => {
      c.value = 0
      return c
    })
    setCounters(cc)
  }
  return (
    <div >
      <Navbar totalValue={ counters.reduce((acc, c) => acc + c.value, 0) } />
      <Couters
        counters={ counters }
        onIncrement={ handleIncrement }
        onDecrement={ handleDecrement }
        onDelete={ handleDelet }
        onReset={ handleReset }
        onAddCouters={ addCouters }

      />
    </div>
  );
}

export default App;
