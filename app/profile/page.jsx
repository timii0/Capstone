import React from 'react'
import Image from 'next/image'

export default function page(props) {
    let alt= 'alt'
  return (
    <>
    <div className={'flex flex-col items-start justify-center px-5'}>
        <Image className={'h-[200px] w-[169.5px] rounded-lg my-5'} src={props.imageUsed} alt={alt} />
        <h1 className={'text-sm mb-3'}>{props.title}</h1>
        <p className={'text-xs font-light'}>{props.info}</p>
        <div>{props.children}</div>
    </div>
    </>
  )
}
