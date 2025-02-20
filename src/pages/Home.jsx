
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import MenuHome from '../components/MenuHome'
import AuthenticityItalian from '../components/Authenticity'
import Testimonials from "../components/Testimonilals"
import Visiter from '../components/Visiter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Welcome/>
        <MenuHome/>
        <AuthenticityItalian/>
        <Testimonials/>
        <Visiter/>
    </div>
  )
}

export default Home