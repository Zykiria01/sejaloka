import Footer from '../../../component/Footer';
import { MainLayout } from '../../../component/Layouts';
import Navbar from '../../../component/Navbar';
import Ulasan from './ulasan';

const AccountPage = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Ulasan />
        <Footer />
      </MainLayout>
    </>
  );
};

export default AccountPage;
