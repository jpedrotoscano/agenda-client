'use client'

import { BaseForm } from "./components/form";

import Image from "next/image";

export default function Home() {

  return (
    <>
      <main>
        <section className="w-full flex align-center justify-between px-6">
          <div className="w-6/12 flex items-center">
            <div className="flex flex-col items-center h-full gap-5">
              <h2 className="text-7xl text-wrap w-3/5 pt-10">Agenda prática, mais tempo para você.</h2>
              <h3 className="text-3xl w-3/5 pb-9">Otimize seu tempo: Uma agenda prática onde seus pacientes fazem o agendamento por conta própria.</h3>
              {/* <button>Economize meu tempo</button> */}
              <BaseForm />
            </div>
          </div>
          <div className="w-6/12">
            <Image 
              src="/clock.svg" 
              alt="Relógio"
              style={{
                width: "100%"
              }}
              width={100}
              height={100}
            />
          </div>
        </section>
      </main>
    </>
  );
}
