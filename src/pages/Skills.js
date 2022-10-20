import { SubMenu } from "../components/SubMenu";
import { ProgressBar } from "../components/ProgressBar";

export const Skills = () => {
  return (
    <div id="skills" className="h-screen bg-slate-900 px-10">
      <SubMenu description={"Habilidades"} />
      <div className="flex flex-row gap-5 border-solid rounded border-2 px-5 mt-1 bg-white">
        <div className="w-1/2">
        <ProgressBar logoPath={"react-logo.png"} name="REACT JS" percent={"90%"}/>
      <ProgressBar logoPath={"html-logo.png"} name="HTML" percent={"90%"}/>
      <ProgressBar logoPath={"css-logo.png"} name="CSS" percent={"90%"}/>
      <ProgressBar logoPath={"js-logo.png"} name="JAVASCRIPT" percent={"90%"}/>
      <ProgressBar logoPath={"ts-logo.png"} name="TYPESCRIPT" percent={"90%"}/>
      <ProgressBar logoPath={"node-logo.png"} name="NODE JS" percent={"90%"}/>
      <ProgressBar logoPath={"postgresql-logo.png"} name="PostgreSQL" percent={"60%"}/>
        </div>
        <div className="w-1/2">
      <ProgressBar logoPath={"mysql-logo.png"} name="MySQL" percent={"70%"}/>
      <ProgressBar logoPath={"mongodb-logo.jpg"} name="MongoDB" percent={"80%"}/>
      <ProgressBar logoPath={"redux-logo.png"} name="REDUX" percent={"80%"}/>
      <ProgressBar logoPath={"python-logo.png"} name="PYTHON" percent={"50%"}/>
      <ProgressBar logoPath={"tailwindcss-logo.png"} name="TAILWIND CSS" percent={"90%"}/>
      <ProgressBar logoPath={"materialui-logo.svg"} name="MATERIAL UI" percent={"90%"}/>
        </div>
      </div>
      
    </div>
  );
};
