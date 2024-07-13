"use client"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import * as React from "react"

import { Button } from "@/ui/components/button"
import { Calendar } from "@/ui/components/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/components/popover"
import { cn } from "@/ui/utils"

export function DatePicker({
  children,
  onDateChange,
}: {
  onDateChange: (date: Date) => void
  children: React.ReactNode
}) {
  const MIN_DATE = new Date("01-01-1924")
  const MAX_DATE = new Date("01-01-2009")
  const [date, setDate] = React.useState<Date>(MAX_DATE)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex w-full flex-col gap-2">
          {children}
          <Button
            type="button"
            variant={"outline"}
            className={cn(
              "justify-start !border-zinc-300 text-left font-normal md:w-[240px]",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              format(date, "PPP", { locale: ptBR })
            ) : (
              <span>Selecione uma data</span>
            )}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          min={MIN_DATE}
          max={MAX_DATE}
          selected={date}
          onSelect={(date) => {
            if (date) {
              setDate(date)
              onDateChange(date)
            }
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
