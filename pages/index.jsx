import Link from 'next/link'
import React from 'react'
import EmailTable from '../components/EmailTable'
import Sidebar from '../components/Sidebar'

const index = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <EmailTable/>
      <Link href={'/builder'}>a</Link>
    
    </div>
  )
}

export default index