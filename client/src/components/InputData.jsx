"use client";

import {useRef} from 'react'
import io from 'socket.io-client'


export default function InputData({setSocket}) {


    const dataRef         = useRef()
    const atendimentosRef = useRef()


    const handleSubmit =  async () => {
        const dataAtendimentos = dataRef.current.value
        const qtdAtendimentos  = atendimentosRef.current.value
        
        if(!dataAtendimentos.trim() || !qtdAtendimentos.trim()) return;
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_chamadas',({dataAtendimentos,qtdAtendimentos}))
        setSocket(socket)
        clearInput()
        

    }


    const clearInput = () => {
        dataRef.current.value         = '',
        atendimentosRef.current.value = ''

      }




    return (
      <div>
            <h1>Atendimentos por mês</h1>
            <input type="number"require ref={atendimentosRef}/>
            <input type="month" ref ={dataRef}></input>
            <button onClick={()=>handleSubmit()}>Enviar</button>
      </div>
    )
  }