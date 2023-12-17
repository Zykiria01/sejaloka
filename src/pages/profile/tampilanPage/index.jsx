import Footer from '../../../component/Footer';
import { MainLayout } from '../../../component/Layouts';
import Navbar from '../../../component/Navbar';
import Tampilan from './tampilan';

const AccountPage = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Tampilan />
        <Footer />
      </MainLayout>
    </>
  );
};

export default AccountPage;
