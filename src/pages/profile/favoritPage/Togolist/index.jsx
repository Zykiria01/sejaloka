import { DotIcon } from "lucide-react";
import ProfileLayout from "../../layout/profilelayout";

const Togolist = () => {
  return (
    <ProfileLayout>
      <ul className="flex flex-col gap-8 w-full items-start p-10">
        <li className="text-black flex font-bold">
          <DotIcon/> Museum Geologi Bandung
        </li>
        <li className="text-black flex font-bold">
          <DotIcon/> Museum Geologi Bandung
        </li>
        <li className="text-black flex font-bold">
          <DotIcon/> Museum Geologi Bandung
        </li>
        <li className="text-black flex font-bold">
          <DotIcon/> Museum Geologi Bandung
        </li>
      </ul>
      
    </ProfileLayout>
  );
};

export default Togolist;
