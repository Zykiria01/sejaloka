import { MainLayout } from '../../component/Layouts';
import Navbar from '../../component/Navbar';
import Header from '../../component/Header/Index';
import SectionDestinasi from './SectionDestinasi/Index';
import SectionPengalaman from './SectionPengalaman/Index';
import TravelerReviews from './TravelerReviews';
import Footer from '../../component/Footer';
import Logo2 from '../../assets/image/logo2.jpg'

const landingPage = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Header  search={true} placeholder={'Kota Tua'} image={Logo2} title={'Hai, Kamu mau wisata kemana?'} />
        <SectionPengalaman />
        <SectionDestinasi />
        <TravelerReviews />
        <Footer />
      </MainLayout>
    </>
  );
};

export default landingPage;
