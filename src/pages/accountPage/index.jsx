import Footer from '../../component/Footer';
import { MainLayout } from '../../component/Layouts';
import Navbar from '../../component/Navbar';
import AkunSaya from './AkunSaya';

const AccountPage = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <AkunSaya />
        <Footer />
      </MainLayout>
    </>
  );
};

export default AccountPage;
