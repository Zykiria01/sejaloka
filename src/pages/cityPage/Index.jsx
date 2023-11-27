import { MainLayout } from '../../component/Layouts';
import Navbar from '../../component/Navbar';
import Header from '../../component/Header/Index';
import Footer from '../../component/Footer';
import Logo3 from '../../assets/image/logo3.jpg'



const CityPage = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Header  search={true} placeholder={'Cari Aktivitas Destinasi'} image={Logo3} title={'mulai petualangan berwisatamu dari sini'}/>
        <Footer />
      </MainLayout>
    </>
  );
};

export default CityPage;
