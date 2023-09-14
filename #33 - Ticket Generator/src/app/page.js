"use client"
import styles from './page.module.css'
import GenerateTicket from './components/GenerateTicket/GenerateTicket'
import Ticket from './components/Ticket/Ticket'
import { useState } from 'react'

export default function Home() {
const [ticketData, setTicketData] = useState(null)


  return (
    <main className={styles.main}>
        <GenerateTicket setTicketData={ setTicketData } />
        <Ticket name={ticketData?.name} avatarUrl={ticketData?.avatarUrl} />
    </main>
  )
}
