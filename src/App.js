// import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Headder from '../src/MyComponents/Hedder';
import './App.css';
import Layout from './Layout';
import Brands from './Brands';
import FAQs from './FAQs';
import Home from './MyComponents/Home';
import Registered from './Registered';
import NewsItems from "./NewsItems";
import News from "./News";
import VideoLink from "./MyComponents/VideoLink";

export default function App() {
  return (
    <>
      <div className="App">

        <section className='home-section'>
          <div >
            {/* <Headder />
            <Home />*/}


            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="blogs" element={<Brands />} />
                  <Route path="contact" element={<FAQs />} />
                  <Route path="registered" element={<Registered />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>

        </section>
        <VideoLink />
        
      </div>

    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// export default App;
