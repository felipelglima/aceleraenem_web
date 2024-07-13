import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PreStudentForm } from "@/ui/no-available-enrollments/form"

export async function InterestedModal() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center justify-center gap-4 rounded-full bg-primary-dark px-3 py-1.5 font-bold text-white transition ease-out active:scale-90">
          Seja notificado
        </button>
      </PopoverTrigger>

      <PopoverContent className="z-50">
        <PreStudentForm />
      </PopoverContent>
    </Popover>
  )
}
