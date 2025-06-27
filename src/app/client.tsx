'use client'

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

export const ClientTesting = () => {
  const trpc= useTRPC()
  const { data } = useSuspenseQuery(trpc.createAI.queryOptions({text: 'John Prefetch'})) 
 
  return (
    <div>
        {JSON.stringify(data)}
    </div>
  )
}

