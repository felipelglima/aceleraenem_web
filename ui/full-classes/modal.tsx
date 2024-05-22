import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PreStudentForm } from "./form"

export const NoClassesModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex w-max items-center justify-center gap-4 rounded-full bg-black bg-primary-dark px-3 py-1.5 font-bold text-white transition ease-out hover:bg-black/35 active:scale-90">
          Quero ser notificado
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Seja notificado quando abrirem novas vagas</DialogTitle>
        </DialogHeader>

        <PreStudentForm />
      </DialogContent>
    </Dialog>
  )
}
