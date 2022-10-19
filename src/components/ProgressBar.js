export const ProgressBar = ({ logoPath, name, percent }) => {
  return (
    <div className="text-white my-5">
      <div className="flex flex-row justify-between items-center mb-3">
        <div className="flex flex-row justify-start items-center gap-2">
          <img src={logoPath} alt="logo" width="40" />
          <div>{name}</div>
        </div>
        <div>{percent}</div>
      </div>
      <div class="w-full bg-sky-100 h-1">
        <div class="bg-sky-500 h-1" style={{ width: percent }}></div>
      </div>
    </div>
  );
};
