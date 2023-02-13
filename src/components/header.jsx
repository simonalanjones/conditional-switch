import axahealthlogo from "../assets/axa-health_logo_solid_rgb.webp";
const Header = () => {
  return (
    <div className="border-b border-slate-100 ">
      <div className="mx-auto w-full max-w-5xl items-center py-4 px-5 md:flex md:flex-nowrap">
        <img width="130" src={axahealthlogo} />
        <div className="flex grow justify-end gap-x-12 text-base font-bold uppercase tracking-wide text-blue-800">
          <p>conditional switch</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
