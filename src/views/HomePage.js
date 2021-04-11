import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return (
       <>
        <Header/>
        <div className="">
        <Home /> 
        </div>
        <Footer />
       </>
    )
}

export default HomePage;