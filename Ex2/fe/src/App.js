import DatingCards from './components/datingcard/DatingCard';
import Header from './components/header/Header';
import SwipeButtons from './components/swipebutton/SwipeButtons';

function App() {
    return (
        <div className="app">
            <Header />
            <DatingCards />
            <SwipeButtons />
        </div>
    );
}

export default App;