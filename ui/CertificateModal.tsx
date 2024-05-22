import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image, { StaticImageData } from "next/image"

export const CertificateModal = (props: {
  name: string
  img: StaticImageData
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full transition ease-out active:scale-90">
          <Image src={props.img} className="h-auto w-full" alt="" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>{props.name}</DialogTitle>
        </DialogHeader>

        <Image src={props.img} className="h-auto w-full" alt="" />
      </DialogContent>
    </Dialog>
  )
}
