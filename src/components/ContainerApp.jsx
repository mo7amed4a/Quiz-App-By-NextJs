import React from 'react'

export default function ContainerApp(props) {
  return (
    <section className={`max-w-5xl mx-auto px-8 ${props.className}`}>{props.children}</section>
  )
}
