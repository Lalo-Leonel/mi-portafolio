import { Icon } from "../components/Icon";

export const About = () => {
  return (
    <div id="aboutMe" className="h-screen bg-slate-900 pl-10">
      <div className="flex flex-row justify-start items-center pt-20">
        <div className="bg-red-500 h-1 w-40 mr-4"></div>
        <h4 className="text-white text-lg font-sans">Sobre mi</h4>
      </div>

      <div className="flex flex-row">
        <div>
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-white text-3xl font-extrabold font-sans mb-5">
              Lalo Leonel Mamani Ccanahuire
            </h4>
            <div className="bg-red-500 h-1 w-40 mr-4"></div>
          </div>
          <div className="text-white text-base font-light my-5">
            Soy Desarrollador Frontend y egresado en Ingeniería Informática y de
            Sistemas. Persona proactiva, siempre dispuesto a aprender y
            desarrollar competencias dentro del campo de desarrollo de software.
            Mi experiencia en el campo de desarrollo de software ha contribuido
            aun mas mis habilidades de liderazgo. Además, he aumentado mi
            capacidad de adaptarme rápidamente a un entorno desafiante y ofrecer
            excelentes resultados.
          </div>
            <Icon />
        </div>
        <img src="imagedev.jpg" alt="imagedev" width="50%" />
      </div>
    </div>
  );
};
