import Image, { StaticImageData } from "next/image";

type categoryType = {
  image: StaticImageData;
  categoryName: String;
};
export default function Foodtype(props: categoryType) {
  return (
    <div className="flex items-center bg-red-100 px-5 py-2 mx-5 rounded my-4 ">
      <span>
        <Image
          className="br-red-600 rounded p-2"
          src={props.image}
          alt="category"
        />
      </span>
      <span className="text-black">{props.categoryName}</span>
    </div>
  );
}
