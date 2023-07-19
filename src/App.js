import './App.css';
import {SliserWithSwiper} from "./componnets/SliserWithSwiper";
import {Carousel} from "./componnets/Carousel/Carousel";
import CarouselWrapper from "./componnets/Carousel/CarouselWrapper";

function App() {
    return (
        <div className="App">
            <SliserWithSwiper/>
            <CarouselWrapper/>
        </div>
    );
}

export default App;
