import { MainLayout } from "../../component/Layouts"
import Navbar from "../../component/Navbar"
import Header from "./Header/Index"
import SectionDestinasi from "./SectionDestinasi/Index"
import SectionPengalaman from "./SectionPengalaman/Index"



const landingPage = () => {
  return (
    <>
    <MainLayout>
        <Navbar/>
        <Header/>
        <SectionPengalaman/>
        <SectionDestinasi/>
    </MainLayout>
    </>
  )
}

export default landingPage