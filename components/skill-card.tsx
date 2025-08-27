"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface SkillCardProps {
  icon: React.ReactNode
  name: string
  level: number
  index: number
}

export function SkillCard({ icon, name, level, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow skill-card group">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="font-semibold">{name}</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Proficiency</span>
            <span className="font-medium">{level}%</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}