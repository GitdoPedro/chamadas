"use client";

import React, {useState,useEffect} from 'react'


export default function OutputData({socket}) {

    const [dataList,setDataList] = useState([])

        
    useEffect(()=>{
        socket.on('receive_qtd', data => {
            setDataList((current) => [...current,data])
        })

        return () => socket.off('receive_qtd')
    },[socket])
        


    return (
        <div>
            <ul>
                {
                dataList.map((data,index) => (
                        <li key={data.qtdId}>{data.qtdAtendimentos}:{data.dataAtendimentos}</li>
                    ))
                }  
            </ul> 
        </div>
    )
  }