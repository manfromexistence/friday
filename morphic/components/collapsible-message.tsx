import { UserCircle2, Bot, ChevronDown } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './ui/collapsible'
import { Separator } from './ui/separator'
import { cn } from '@/lib/utils'
import { IconLogo } from './ui/icons'

interface CollapsibleMessageProps {
  children: React.ReactNode
  role: 'user' | 'assistant'
  isCollapsible?: boolean
  isOpen?: boolean
  header?: React.ReactNode
  onOpenChange?: (open: boolean) => void
  showBorder?: boolean
}

export function CollapsibleMessage({
  children,
  role,
  isCollapsible = false,
  isOpen = true,
  header,
  onOpenChange,
  showBorder = true
}: CollapsibleMessageProps) {
  const content = <div className="py-2 flex-1">{children}</div>

  return (
    <div className="flex gap-3">
      <div className="relative flex flex-col items-center">
        <div className={cn('mt-[10px]', role === 'assistant' && 'mt-4')}>
          {role === 'user' ? (
            <UserCircle2 size={20} className="text-muted-foreground" />
          ) : (
            <IconLogo className="size-5" />
          )}
        </div>
      </div>

      {isCollapsible ? (
        <div
          className={cn(
            'flex-1 rounded-2xl p-4',
            showBorder && 'border border-border/50'
          )}
        >
          <Collapsible
            open={isOpen}
            onOpenChange={onOpenChange}
            className="w-full"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full group">
              <div className="flex items-center justify-between w-full gap-2">
                {header && <div className="text-sm">{header}</div>}
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
              <Separator className="my-4 border-border/50" />
              {content}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ) : (
        content
      )}
    </div>
  )
}