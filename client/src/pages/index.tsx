"use client";

import {useState} from 'react'


import InputData from '../components/InputData'
import OutputData from '../components/OutputData'


export default function Home() {

  const [socket, setSocket] = useState(null)

  return (
    <div>
      <InputData setSocket={setSocket}/>
      {socket && <OutputData socket={socket} />}
    </div>
  )
}
