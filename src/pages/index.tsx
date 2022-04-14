import React from "react";
import Tree from "../../public/icons/tree.svg";
import Leaf from "../../public/icons/leaf.svg";
import Plant from "../../public/icons/plant.svg";
import Link from "next/link";
import Image from "next/image";


const index = () => {

  return (
    <div>
      <div className="w-full px-5 bg-[url('/images/greenbg.png')] bg-cover bg-center min-h-[650px] py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col max-w-3xl space-y-3">
            <div className="text-7xl text-primary/95 md:text-8xl">
              <span className="font-bold text-primary">Silo de maíz</span>{" "}
              <span className="">alimento</span>{" "}
              <span className="font-bold text-primary">efectivo</span>
            </div>
            <span className="text-xl md:text-2xl">
              El pasto no siempre es suficiente cuando se trata de complementos
              los silos siguen siendo una gran alternativa
            </span>
          </div>
        </div>
      </div>
      <div className="px-5 mx-auto max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-5 transform -translate-y-10 md:grid-cols-3">
          <div className="flex flex-col items-center p-10 space-y-8 bg-white">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-secondary">
              <Tree className="w-10 fill-white" />
            </div>
            <span className="text-3xl font-bold text-secondary">ALMIDON</span>
            <div className="text-lg text-center">
              Principal fuente de energía del maíz, procedente exclusivamente
              del grano
            </div>
          </div>
          <div className="flex flex-col items-center p-10 space-y-8 bg-white">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-secondary">
              <Leaf className="w-10 fill-white" />
            </div>
            <span className="text-3xl font-bold text-secondary">FIBRA</span>
            <div className="text-lg text-center">
              Componentes fibrosos que se convierten en azúcares fáciles de
              digerir a lo largo del resto del tracto intestinal
            </div>
          </div>
          <div className="flex flex-col items-center p-10 space-y-8 bg-white">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-secondary">
              <Plant className="w-10 fill-white" />
            </div>
            <span className="text-3xl font-bold text-secondary">ORGÁNICO</span>
            <div className="text-lg text-center">Un producto 100% orgánico</div>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="object-cover w-full h-[500px] relative">
          <Image src="/images/corn-man.jpg" alt="hombre en un sembrio de maiz" layout="fill" objectFit="cover"/>
        </div>

        <div className="flex flex-col justify-center p-10 space-y-10 bg-gradient-to-r grd-primary">
          <span className="text-5xl font-bold text-primary">
            ¿Quiénes somos?
          </span>
          <span className="text-lg">
            Somos Econitre y nos dedicamos a la producción y venta de silo de
            maiz de alto valor nutricional y energético.
          </span>
          <Link href="/contacto">
            <button className="w-56 rounded-full btn-primary">Contactar</button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col py-20 space-y-20 bg-white px-5">
        <span className="mx-auto text-5xl font-bold text-primary">
          Beneficios
        </span>
        <div className="grid grid-cols-1 gap-20 mx-auto md:grid-cols-3 max-w-7xl">
          <div className="flex flex-col space-y-5 md:space-y-20">
            <div className="grd-primary h-80">
              <div className="w-full h-full relative transform -translate-x-10 -translate-y-10">
                <Image
                  src="/images/single-cow.jpg"
                  alt="vaca"
                  layout="fill"
                  objectPosition="cover"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="text-3xl font-bold text-primary">
                Incremento de producción
              </span>
              <span className="text-lg font-light">
                El ensilaje de maíz se puede utilizar para aumentar las tasas de
                crecimiento del ganado, mejorar la condición de las vacas o
                aumentar la producción de leche.
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-5 md:space-y-20 ">
            <div className="flex flex-col space-y-5">
              <span className="text-3xl font-bold text-primary">
                Menos lixiviación de nitrógeno
              </span>
              <span className="text-lg font-light">
                Alimentar con ensilaje de maíz bajo en nitrógeno junto con
                pastos diluye los niveles de proteína en la dieta y esto, a su
                vez, reduce la cantidad de nitrógeno excretado en la orina.
              </span>
            </div>
            <div className="order-first grd-primary h-80 md:order-none">
              <div className="w-full h-full relative transform -translate-x-10 -translate-y-10">
                <Image
                  src="/images/cows-eating.jpg"
                  alt="vacas comiendo silo de maiz"
                  layout="fill"
                  objectPosition="cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 md:space-y-20">
            <div className="grd-primary h-80">
              <div className="w-full h-full relative transform -translate-x-10 -translate-y-10">
                <Image
                  src="/images/corn.jpg"
                  alt=""
                  layout="fill"
                  objectPosition="planta de maiz"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="text-3xl font-bold text-primary">
                Alimento seguro
              </span>
              <span className="text-lg font-light">
                El ensilaje de maíz es seguro para alimentar porque contiene una
                mezcla de grano, fibra y maíz.
              </span>
            </div>
          </div>
        </div>
        <Link href="/beneficios">
          <button className="w-56 mx-auto rounded-full btn-primary">
            Ver más 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
