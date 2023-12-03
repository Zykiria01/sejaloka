import ProfileLayout from "../../layout/profilelayout";

const tampilanPage = () => {
  return (
    <ProfileLayout>
      <div className= "w-full h-auto rounded-xl flex flex-col  p-5 gap-5 justify-center items-center">
            <div className="flex flex-col w-full gap-2 bg-white border-4 rounded-xl p-5">
                <h1 className="text-black font-poppins font-bold text-2xl">
                  Lights   
                </h1>
                <p className="text-black font-poppins"> 
                Sejaloka : Jelajahi Warisan Budaya
                </p>
            </div>
            <div className="flex flex-col w-full gap-2 bg-zinc-800 border-4 rounded-xl p-5">
                <h1 className="text-white font-poppins font-bold text-2xl">
                  Darks  
                </h1>
                <p className="text-white font-poppins"> 
                Sejaloka : Jelajahi Warisan Budaya
                </p>
            </div>
      </div>


    </ProfileLayout>
  );
};

export default tampilanPage;
