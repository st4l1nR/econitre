import React from "react";
import Image from "next/image";
const beneficios = () => {
  return (
    <div>
      <div className="w-full grd-primary grid grid-cols-1 md:grid-cols-2 ">
        <div className="relative w-full min-h-[500px]">
          <Image
            src="/images/tim-hufner-w2AGjTzCVKw-unsplash.jpg"
            alt="siembra de maiz"
            alt="hombre cargando leche"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-10 flex flex-col space-y-10">
          <span className="text-5xl text-primary font-bold text-center">
            Menos lixiviación de nitrógeno
          </span>
          <ul className="text-lg font-light list-disc flex flex-col space-y-3">
            <li>
              Cuando una vaca recibe más proteína de la que necesita, el exceso
              de nitrógeno se excreta en la orina.
            </li>
            <li>
              El volumen de nitrógeno en un parche de orina (1000 kgN/ha) es
              mayor que la absorción anual de la plantay esto da como resultado
              la lixiviación de nitratos.
            </li>
            <li>
              Los pastos de ryegrass-trébol frecuentemente contienen más
              nitrógeno (o proteína cruda) de lo que las vacas pueden utilizar.
            </li>
            <li>
              La alimentación con ensilaje de maíz bajo en nitrógeno junto con
              pastos diluye los niveles de proteína en la dieta y esto, a su
              vez, reduce la cantidad de nitrógeno excretado en la orina.
            </li>
            <li>
              Son posibles reducciones aún mayores cuando el ensilaje de maíz se
              alimenta en una plataforma de separación que permite que las vacas
              se mantengan fuera de los pastos durante los meses más húmedos.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-white grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-10 flex flex-col space-y-10">
          <span className="text-5xl text-primary font-bold text-center">
            Mejora de la nutrición de las vacas
          </span>
          <ul className="text-lg list-disc flex flex-col space-y-3 font-light">
            <li>
              El ensilaje de maíz bajo en proteínas y alto en carbohidratos es
              un complemento excelente para los pastos bajos en carbohidratos y
              altos en proteínas.
            </li>
            <li>
              El ensilaje de maíz es seguro para alimentar porque contiene una
              mezcla de grano y fibra, maíz.
            </li>
            <li>
              El ensilaje de maíz se puede utilizar para aumentar las tasas de
              crecimiento del ganado, mejorar la condición de las vacas o
              aumentar la producción de leche.
            </li>
          </ul>
        </div>
        <div className="relative w-full min-h-[500px]">
          <Image
            src="/images/mihail-macri-gq-IUqXTvB4-unsplash.jpg"
            alt="hombre cargando leche"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default beneficios;
