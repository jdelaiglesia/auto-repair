"use client";

import { useEffect, useState } from "react";
import CarCard from "@/components/ui/carcard";

interface Car {
  id: string;
  manufacturer: string;
  model: string;
  fuel: string;
  photo: string;
}

export function Catalog() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://66d4a2255b34bcb9ab3f1bc9.mockapi.io/api/car"
        );
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <section
      id="catalog"
      className="flex justify-center w-full py-12 md:py-24 lg:py-32 h-max"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nuestros vehículos a la venta
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contamos con una excelente variedad de vehículos seminuevos, con
              garantía y financiamiento disponible.
            </p>
          </div>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {loading ? (
              <div className="col-span-full flex justify-center items-center h-96">
                <span className="loading loading-infinity loading-lg"></span>
              </div>
            ) : (
              cars.map((car) => (
                <CarCard
                  key={car.id}
                  manufacturer={car.manufacturer}
                  model={car.model}
                  fuel={car.fuel}
                  photo={car.photo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
