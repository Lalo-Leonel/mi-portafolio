export const ProgressBar = ({ logoPath, name, percent }) => {
  return (
    <div className=" text-slate-700 my-5">
      <div className="flex flex-row justify-between items-center mb-3 h-10">
        <div className="flex flex-row justify-start items-center gap-2">
          <img src={logoPath} alt="logo" width="40"/>
          <div>{name}</div>
        </div>
        <div>{percent}</div>
      </div>
      <div class="w-full bg-slate-300 h-1">
        <div class="bg-slate-700 h-1" style={{ width: percent }}></div>
      </div>
    </div>
  );
};
