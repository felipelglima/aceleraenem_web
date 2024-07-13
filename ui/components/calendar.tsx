"use client"

import { ptBR } from "date-fns/locale"
import { DayPicker, SelectSingleEventHandler } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { cn } from "../utils"
import { buttonVariants } from "./button"

// export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  min,
  max,
  selected,
  onSelect,
}: {
  min: Date
  max: Date
  selected: Date
  onSelect: SelectSingleEventHandler
}) {
  return (
    <DayPicker
      mode="single"
      showOutsideDays
      captionLayout="dropdown-buttons"
      fromYear={min.getFullYear()}
      toYear={max.getFullYear()}
      locale={ptBR}
      selected={selected}
      onSelect={onSelect}
      // styling
      className="p-3"
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption_dropdowns: "flex items-center gap-2",
        dropdown_month:
          "rdp-dropdown_month border border-border rounded gap-2 flex items-center",
        dropdown_year:
          "rdp-dropdown_year border border-border rounded gap-2 flex items-center",
        caption_label: "rdp-caption_label !text-md !font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
      }}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
