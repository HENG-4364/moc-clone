'use client'

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function DocumentSearch() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input 
        className="pl-10 w-full max-w-xl" 
        placeholder="ស្វែងរកឯកសារ..." 
      />
    </div>
  )
}

