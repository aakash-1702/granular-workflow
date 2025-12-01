import { ModeToggle } from '@/components/ui/theme-toggle'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>
        this is the nextjs project
      </h1>
      <div>
        <p>Want to switch themes ??</p>
        <button> <ModeToggle /></button>
      </div>
    </div>

  )
}

export default page