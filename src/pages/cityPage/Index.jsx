import { MainLayout } from '../../component/Layouts';
import Navbar from '../../component/Navbar';
import Header from '../../component/Header/Index';
import Footer from '../../component/Footer';
import Gedungsate from "../../assets/image/Gedungsate.jpg"
import SectionJelajahi from './SectionJelajahi/Index';
import SectionRekomendasi from './SectionRekomendasi/Index';



const CityPage = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Header  search={true} placeholder={'Cari Aktivitas Destinasi'} image={Gedungsate} title={'Mulai Petualangan Berwisatamu Dari Sini'}/>
        <SectionJelajahi />
        <SectionRekomendasi />
        <Footer />
      </MainLayout>
    </>
  );
};

export default CityPage;
