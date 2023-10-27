import Filter from "./Filter";
import Dropdown from "./Dropdown";
export default function Foods() {
  return (
    <div className="m-2">
      <div className=" bg-[url('../images/banner.jpg')] bg-violet-400 brightness-50  bg-blend-multiply bg-cover p-20 px-40 bg-center mb-16">
        <h3 className="eczar font-bold text-4xl text-white">All Foods</h3>
      </div>

      <div>
        <Filter />
        <Dropdown />
      </div>
    </div>
  );
}
