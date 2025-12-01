import { HeroHeader } from '@/app/(marketing)/_components/header'
import HeroSection from '@/app/(marketing)/_components/hero-section'
import { ModeToggle } from '@/components/ui/theme-toggle'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroHeader />
      <HeroSection />      
    </div>

  )
}

export default page