// components/CarCard.tsx
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  manufacturer: string;
  model: string;
  fuel: string;
  photo: string;
}

const CarCard: React.FC<CarCardProps> = ({
  manufacturer,
  model,
  fuel,
  photo,
}) => {
  return (
    <Card className="p-6 shadow-md" key={new Date().getTime()}>
      <Image
        src={photo}
        width="550"
        height="550"
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
      />
      <h3 className="text-xl font-bold">
        {manufacturer} {model}
      </h3>
      <p className="text-muted-foreground">{fuel}</p>
      <div className="flex flex-row justify-center w-full space-x-5">
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
          onClick={() => {
            const modal = document.getElementById("modal") as HTMLDialogElement;
            if (modal) {
              modal.showModal();
            }
          }}
        >
          Comprar
        </Link>
        <Link
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Detalles
        </Link>
      </div>
      <dialog id="modal" className="modal bg-primary/25">
        <div className="modal-box">
          <h3 className="font-bold text-white">¡Gracias!</h3>
          <p className="py-4 text-white">
            La compra ha sido realizada exitosamente. Nos pondremos en contacto
            con usted para coordinar los detalles.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </Card>
  );
};

export default CarCard;
