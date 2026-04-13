'use client'
import React from 'react'
import TabbedProjectList from '@/components/TabbedProjectList';
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="mt-32 bg-theme-main">
      <TabbedProjectList />
    </motion.div>
  )
}

export default Projects