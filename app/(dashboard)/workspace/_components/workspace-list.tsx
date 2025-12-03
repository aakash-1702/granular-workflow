import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import React from 'react' 
import { Button } from '@/components/ui/button'

const organisations = [
  {
    id : 1,
    name : "Organization One",
    avatar : "tf",
  },
  {
    id : 2,
    name : "Organization Two",  
    avatar : "gt",
  },
  {
    id : 3,
    name : "Organization Three",  
    avatar : "at",
  }
]

const colors = [
  "bg-blue-500 hover:bg-blue-600",
  "bg-green-500 hover:bg-green-600",
  "bg-purple-500 hover:bg-purple-600",  
  "bg-red-500 hover:bg-red-600", 
  "bg-yellow-500 hover:bg-yellow-600",
  "bg-pink-500 hover:bg-pink-600",  
]

const workspaceColor = (id : String) => {
  const charSum = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[charSum % colors.length];
}

const WorkspaceList = () => {
  return (
    <TooltipProvider>
      <div className='flex flex-col gap-2'>
        {organisations.map((org) => {
          return (
            <Tooltip key={org.id}>
              <TooltipTrigger asChild>
                <Button className={`size-12 transition-all duration-200 ${workspaceColor(org.id.toString())}`}>
                  <span className="text-sm font-semibold">{org.avatar}</span>
                </Button>                
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{org.name}</p>                
              </TooltipContent>


            </Tooltip>
          );
        })}
      </div>            
    </TooltipProvider>
  )
}

export default WorkspaceList