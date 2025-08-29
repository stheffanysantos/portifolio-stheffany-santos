import { useRef } from 'react'
import './css/sandbox.css'
import './css/embla.css'
// componentes
import { Button } from 'primereact/button'
import { Menubar } from 'primereact/menubar'
import { Fieldset } from 'primereact/fieldset'
import { Skeleton } from 'primereact/skeleton'
import UseAnimationFrame from './components/UseAnimationFrame'
import type { EmblaOptionsType } from 'embla-carousel'
import { Card } from 'primereact/card'
import useEmblaCarousel from 'embla-carousel-react'

// imagens
import nlw from './assets/img/nlw-agents.webp'
import licode from './assets/img/licode.png'
import uiux from './assets/img/uiux.avif'
import typescript from './assets/img/stacks/typescript.svg'
import react from './assets/img/stacks/react.svg'
import figma from './assets/img/stacks/figma.svg'
import java from './assets/img/stacks/java.svg'
import docker from './assets/img/stacks/docker.svg'
import postgre from './assets/img/stacks/postgre.svg'

const WEB_PROJECTS = [
  {
    title: 'NLWAgents-server',
    subTitle: 'NLWAgents2025 Backend',
    image: nlw,
    content:
      'Servidor back-end construído com Fastify e TypeScript, utilizando Drizzle ORM para comunicação com banco de dados PostgreSQL.',
    footer: '2025 - Projeto Individual',
    link: 'https://github.com/stheffanysantos/NLWAgents-server'
  },
  {
    title: 'NLWAgents-web',
    subTitle: 'NLWAgents2025 Frontend',
    image: nlw,
    content:
      'Front-end em React 19 + Vite com TypeScript e Tailwind CSS. Navegação com React Router v7, dados com React Query, componentes acessíveis com Radix UI e animações com tw-animate-css. ',
    footer: '2025 - Projeto Individual',
    link: 'https://github.com/stheffanysantos/NLWAgents-web'
  },
  {
    title: 'licode-home',
    subTitle: 'Power BI + API',
    image: licode,
    content:
      'Front-end com Next.js 15 e React 19, usando TypeScript e Tailwind CSS. Estilização com tailwind-merge e clsx, componentes via Radix UI e ícones com lucide-react.',
    footer: '2025 - Projeto Acadêmico',
    link: 'https://licode-home.vercel.app/'
  }
]

const UI_UX_PROJECTS = [
  {
    title: '0',
    subTitle: 'Nenhum projjeto cadastrado até o momento',
    image: uiux,
    content:
      'Sem descrição disponível.',
    footer: '----------',
    link: ''
  }
]

function EmblaCarousel({
  slides,
  options
}: {

  slides: typeof UI_UX_PROJECTS
  options: EmblaOptionsType
}) {
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex justify-center gap-4 p-4">
        {slides.map((slide, index) => (
          <div key={index} className="max-w-[350px] shrink-0">
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <Card
                title={slide.title}
                subTitle={slide.subTitle}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                header={
                  <img
                    alt="Imagem"
                    src={slide.image}
                    className="w-full h-[200px] object-cover rounded-t"
                  />
                }
                footer={
                  <span className="text-sm text-gray-500">{slide.footer}</span>
                }
              >
                <p className="m-0">{slide.content}</p>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const sobreMimRef = useRef<HTMLDivElement>(null)
  const projetosWebRef = useRef<HTMLDivElement>(null)


const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' })
}

  const start = <p>Stheffany Santos</p>

const items = [
  {
    label: 'Menu',
  },
  {
    label: 'Sobre Mim',
    command: () => scrollToSection(sobreMimRef)
  },
  {
    label: 'Projetos Web',
    command: () => scrollToSection(projetosWebRef)
  }
]


  const OPTIONS: EmblaOptionsType = { align: 'start' }

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
      <div className="flex flex-col items-center gap-10 mt-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold ">
            Design e desenvolvimento unidos para criar
          </h1>
          <h1 className="text-5xl font-bold ">
            experiências digitais transformadoras.
          </h1>
        </div>
        <p className="text-center">
          Bem-vindo ao meu portfólio! Aqui, compartilho meus projetos e
          habilidades <br />
          como desenvolvedora e designer. Sinta-se à vontade <br />
          para explorar e conhecer meu trabalho.
        </p>
        <Button label="Visualizar Portifolio" severity="help" outlined />
        <div className="w-[1031px] h-[128px] bg-neutral-300 opacity-60 rounded-[50%/100%] blur-sm mx-auto" />
      </div>
      <div ref={sobreMimRef} className="flex flex-col items-center gap-10  mt-40 mb-25" >
        <div className="flex flex-col items-center gap-2 mb-10">
          <Button label="Sobre Mim" severity="help" size="small" outlined />
        </div>
        <div className="flex flex-row justify-evenly items-start gap-20">
          {/* educação e descrição  */}
          <div>
            <Fieldset className="w-[600px]">
              <p className="m-0">
                Sou desenvolvedora front-end com foco em UI/UX e experiência em
                back-end. Tenho habilidades em JavaScript, TypeScript, React,
                Vue.js, Java, Docker, Git, e MySQL. Especialista em criar
                interfaces escaláveis e otimizadas, garantindo boa integração
                com back-end. Sou presidente do Ladies in Code, onde lidero
                iniciativas para promover a inclusão de mulheres na tecnologia.
                Sempre em busca de aprimorar minhas habilidades e entregar
                soluções inovadoras.
              </p>
            </Fieldset>
            <div className="w-[600px] mt-10">
              <h1 className="text-4xl font-bold">EDUCATION</h1>
              <p className="m-0 mt-2">
                Ciências da Computação - Universidade Tiradentes (UNIT) (2023 -
                Atual){' '}
              </p>
            </div>
          </div>
          <UseAnimationFrame className="-bottom-12/12 left-10" />
          {/* skills e experiencias */}
          <div>
            <div>
              <h1 className="text-4xl font-bold">SKILLS</h1>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-row gap-2">
                  <img src={typescript} alt="TypeScript" className="w-16 h-16 mr-2 p-2" />
                  <img src={react} alt="React" className="w-16 h-16 mr-2 p-2" />
                  <img src={figma} alt="Figma" className="w-16 h-16 mr-2 p-2" />
                </div>
                <div className="flex flex-row gap-2">
                  <img src={java} alt="Java" className="w-16 h-16 mr-2 p-2" />
                  <img src={postgre} alt="PostgreSQL" className="w-16 h-16 mr-2 p-2" />
                  <img src={docker} alt="Docker" className="w-16 h-16 mr-2 p-2" />
                </div>
              </div>
            </div>
            <div className="w-[600px] mt-10">
              <h1 className="text-4xl font-bold">EXPERIENCE</h1>
              <div className="flex flex-col mt-2">
                <h4 className="font-semibold">
                  Mentoria de TI | Universidade Tiradentes (2024.2 - Atual)
                </h4>
                <p>
                  Organizo oficinas e mentorias de programação e desenvolvimento
                  de software para iniciantes.
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <h4 className="font-semibold">
                  Presidente - Ladies in Code (2024.2 - Atual)
                </h4>
                <p>
                  Lidero uma comunidade focada na inclusão de mulheres no
                  mercado de tecnologia, organizando workshops e mentorias.
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <h4 className="font-semibold">
                  Desenvolvedora Web - Xprocess (2025-Atual)
                </h4>
                <p>
                  Atuo com desenvolvimento web com foco em front-end e UI/UX
                  design.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={projetosWebRef}>
        <div className="p-6">
          <div className="flex flex-col items-center gap-2 mb-15">
            <Button
              label="Projetos Web"
              severity="help"
              size="small"
              outlined
            />
          </div>
          <EmblaCarousel slides={WEB_PROJECTS} options={OPTIONS} />
        </div>
        <div className="p-6">
          <div className="flex flex-col items-center gap-2 mb-15">
            <Button
              label="Projetos UI/UX"
              severity="help"
              size="small"
              outlined
            />
          </div>
            <EmblaCarousel slides={UI_UX_PROJECTS} options={OPTIONS} />
        </div>
      </div>
      <footer>
        <div className='flex justify-center gap-4 mt-10'>
          <a href="https://www.linkedin.com/in/stheffany-santos-390459271" target="_blank" rel="noopener noreferrer">
            <Button label="Linkedin" severity="info" rounded />
          </a>
          <a href="https://github.com/stheffanysantos" target="_blank" rel="noopener noreferrer">
            <Button label="Github" severity="help" rounded />
          </a>
          <a href="https://instagram.com/tetscode" target="_blank" rel="noopener noreferrer">
            <Button label="Instagram" severity="secondary" rounded />
          </a>
        </div>
        <div className="flex flex-col items-center  gap-2 mt-10 mb-10">
          <p>Criado por Stheffany Santos</p>
          <p>2025 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
