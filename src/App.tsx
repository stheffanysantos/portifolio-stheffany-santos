import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { Image } from 'primereact/image';
import { Fieldset } from 'primereact/fieldset';
import { Skeleton } from 'primereact/skeleton';
import UseAnimationFrame from "./components/UseAnimationFrame";
import imgTetscode from "./assets/img/img-tetscode.jpeg";

export default function App() {
  const start = <p>Stheffany Santos</p>;

  const items = [
    {
      label: "Menu",
    },
    {
      label: "Sobre Mim",
    },
    {
      label: "Projetos",
    },
    {
      label: "Contato",
    },
  ];

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
      <div className="flex flex-col items-center gap-15 mt-15">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold ">Contrary to popular belief,</h1>
          <h1 className="text-5xl font-bold "> Lorem Ipsum is</h1>
        </div>
        <p className="text-center">
          Contrary to popular belief, Lorem Ipsum isContrary to popular belief,<br />
          Lorem Ipsum isContrary to popular belief, Lorem Ipsum isContrary to <br />
          popular belief, Lorem Ipsum isContrary to popular belief, Lorem Ipsum be
          is
        </p>
        <Button label="Visualizar Portifolio" severity="help" outlined />
        <div className="w-[1031px] h-[128px] bg-neutral-300 opacity-30 rounded-[50%/100%] blur-sm mx-auto" />
      </div>
      <div className="flex flex-row justify-center items-start gap-10 mt-25">
        <Image src={imgTetscode} alt="Image" width="250" preview />
        {/* educação e descrição  */}
        <div>
          <Fieldset className="w-[600px]">
              <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </Fieldset>
          <div className="w-[600px] mt-10">
            <h1 className="text-4xl font-bold">EDUCATION</h1>
            <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus commodi, voluptatem accusantium </p>
          </div>
        </div>
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
            <h4>2022-2023</h4>
            <p>Contrary to popular belief, Lorem Ipsum isContrary </p>
          </div>
        </div>
      </div>
    </div>
  );
}
