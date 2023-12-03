import ProfileLayout from "../../layout/profilelayout";
import Logofb from "../../../../assets/image/logofb.png";



const data = [
    {
        title:'Dicoding Museum Geologi Bandung',
        ulasan:'Lokasi strategis, lengkap dan detail akan penjelasan tiap peninggalan bersejarahnya'
},
    {
        title:'Dicoding Museum  Asia Afrika Bandung',
        ulasan:'Lokasi strategis, lengkap dan detail akan penjelasan tiap peninggalan bersejarahnya'
    },
{
        title:'Dicoding Museum Fatahilah',
        ulasan:'Lokasi strategis, lengkap dan detail akan penjelasan tiap peninggalan bersejarahnya'
},
]


const Cardulasan = ({title, ulasan}) => {
    return (
        <div className="bg-yellow-400 w-full h-auto rounded-xl flex flex-col md:flex-row p-5 gap-4 justify-center items-center">
            <img className="object-cover w-20 h-20" src={Logofb} alt="" />
            <div className="flex flex-col w-full gap-2">
                <h1 className="text-white font-poppins">
                    {title}
                </h1>
                <p className="text-black font-poppins">
                    {ulasan}
                </p>
            </div>
        </div>

    );
        
};

const UlasanPage  = () => {
    return (
    
    <ProfileLayout>
        <div className="flex flex-col gap-5 w-full items-center justify=center p-2">
            <Cardulasan
            title={data[0].title}
            ulasan={data[0].ulasan}/>
             <Cardulasan
            title={data[1].title}
            ulasan={data[1].ulasan}/>
             <Cardulasan
            title={data[2].title}
            ulasan={data[2].ulasan}/>
        </div>
    
    </ProfileLayout>
  );
};

export default UlasanPage;
