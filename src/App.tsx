import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { Fieldset } from 'primereact/fieldset';
import { Skeleton } from 'primereact/skeleton';
import UseAnimationFrame from "./components/UseAnimationFrame";
import type { EmblaOptionsType } from "embla-carousel";
import './css/sandbox.css'
import './css/embla.css'
import { Card } from "primereact/card";
import useEmblaCarousel from "embla-carousel-react";

function EmblaCarousel({ slides, options }: { slides: number[]; options: EmblaOptionsType }) {
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex justify-center gap-4 p-4">
        {slides.map((index) => (
          <div
            key={index}
            className="max-w-[350px] shrink-0"
          >
            <Card
              title={`Card ${index + 1}`}
              subTitle="Card Subtitle"
              className="shadow-lg"
              header={<img alt="Imagem" src={`https://picsum.photos/300/200?random=${index}`} />}
              footer={<span className="text-sm text-gray-500">Rodapé do Card</span>}
            >
              <p className="m-0">
                Este é o conteúdo do slide {index + 1}. Você pode colocar qualquer coisa aqui.
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const start = <p>Stheffany Santos</p>;

  const items = [
    {label: "Menu",},
    {label: "Sobre Mim",},
    {label: "Projetos",},
    {label: "Contato",},
  ];

  const OPTIONS: EmblaOptionsType = { align: 'start' }
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="flex flex-col gap-25">
      <UseAnimationFrame className="bottom-4 right-2" />
      <UseAnimationFrame className="bottom-4 top-0" />
      <Menubar
        className="flex justify-around bg-white border-none mt-"
        start={start}
        model={items}
      />
      {/* componete 1 */}
      <div className="flex flex-col items-center gap-10 mt-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold ">Design e desenvolvimento unidos para criar</h1>
          <h1 className="text-5xl font-bold ">experiências digitais transformadoras.</h1>
        </div>
        <p className="text-center">
          Bem-vindo ao meu portfólio! Aqui, compartilho meus projetos e habilidades  <br />
          como desenvolvedora e designer. Sinta-se à vontade <br /> 
          para explorar e conhecer meu trabalho.
        </p>
        <Button label="Visualizar Portifolio" severity="help" outlined />
        <div className="w-[1031px] h-[128px] bg-neutral-300 opacity-60 rounded-[50%/100%] blur-sm mx-auto" />
      </div>
      <div className="flex flex-col items-center gap-10  mt-40 mb-25">
        <div className="flex flex-col items-center gap-2 mb-10">
          <Button label="Sobre Mim" severity="help" size="small" outlined />
        </div>
        <div className="flex flex-row justify-evenly items-start gap-20">
          {/* educação e descrição  */}
          <div>
            <Fieldset className="w-[600px]">
                <p className="m-0">
                  Sou desenvolvedora front-end com foco em UI/UX e experiência em back-end. Tenho habilidades em JavaScript, TypeScript, React, Vue.js, Java, Docker, Git, e MySQL. Especialista em criar interfaces escaláveis e otimizadas, garantindo boa integração com back-end. Sou presidente do Ladies in Code, onde lidero iniciativas para promover a inclusão de mulheres na tecnologia. Sempre em busca de aprimorar minhas habilidades e entregar soluções inovadoras.
                </p>
            </Fieldset>
            <div className="w-[600px] mt-10">
              <h1 className="text-4xl font-bold">EDUCATION</h1>
              <p className="m-0 mt-2">Ciências da Computação - Universidade Tiradentes (UNIT) (2023 - Atual) </p>
            </div>
          </div>
          <UseAnimationFrame className="-bottom-12/12 left-10" />
          {/* skills e experiencias */}
          <div>
            <div>
              <h1 className="text-4xl font-bold">SKILLS</h1>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-row gap-2">
                  <Skeleton size="4rem" className="mr-2"></Skeleton>
                  <Skeleton size="4rem" className="mr-2"></Skeleton>
                  <Skeleton size="4rem" className="mr-2"></Skeleton>
                </div>
                <div className="flex flex-row gap-2">
                  <Skeleton size="4rem" className="mr-2"></Skeleton>
                  <Skeleton size="4rem" className="mr-2"></Skeleton>
                  <Skeleton size="4rem" className="mr-2"></Skeleton>
                </div>
              </div>
            </div>
            <div className="w-[600px] mt-10">
              <h1 className="text-4xl font-bold">EXPERIENCE</h1>
              <div className="flex flex-col mt-2">
                <h4 className="font-semibold">Mentoria de TI | Universidade Tiradentes (2024.2 - Atual)</h4>
                <p>Organizo oficinas e mentorias de programação e desenvolvimento de software para iniciantes.</p>
              </div>
              <div className="flex flex-col mt-2">
                <h4 className="font-semibold">Presidente - Ladies in Code (2024.2 - Atual)</h4>
                <p>Lidero uma comunidade focada na inclusão de mulheres no mercado de tecnologia, organizando workshops e mentorias.</p>
              </div>
              <div className="flex flex-col mt-2">
                <h4 className="font-semibold">Desenvolvedora Web - Xprocess (2025-Atual)</h4>
                <p>Atuo com desenvolvimento web com foco em front-end e UI/UX design. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col items-center gap-2 mb-15">
          <Button label="Projetos Web" severity="help" size="small" outlined />
        </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="p-6">
        <div className="flex flex-col items-center gap-2 mb-15">
          <Button label="Projetos UI/UX" severity="help" size="small" outlined />
        </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}
