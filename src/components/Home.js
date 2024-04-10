import { useLocation } from 'react-router-dom';

function Home(){
    const location=useLocation();
    return(
        <div>
            <br></br>
           <h2>Hello {location.state.id}, Welcome to the Home page</h2>
        </div>

    )
}
export default Home;
