import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import UseAnimationFrame from "./components/UseAnimationFrame";

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
      <UseAnimationFrame className="bottom-4 right-4" />
      <UseAnimationFrame className="bottom-4 top-0" />
      <Menubar
        className="flex justify-around bg-white border-none mt-"
        start={start}
        model={items}
      />
      <div className="flex flex-col justify-center items-center gap-4">
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
      </div>
    </div>
  );
}
