import {Logo} from "../components"
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Link } from "react-router-dom"
const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            <div className="info">
                <h1> Job <span>Tracking</span> App </h1>
                <p>
                    Jobme is your one stop solution for an effective and hassle free way of managing and tracking your job applications.
                </p>
                <Link to='/register'>
                    <button className="btn btn-hero"> Login / Register</button>
                </Link>
                
            </div>
            <img src={main} alt="job hunt" className="img main-img"/>
        </div>
    </Wrapper>
  )
}

export default Landing