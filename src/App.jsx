import './App.css';
import LineUpContent from './components/LineUpContent';
import ReviewContent from './components/ReviewContent';
import TopTenContent from './components/TopTenContent';
import WeekLiveContent from './components/WeekLiveContent';

function App() {
  return (
    <div className="App">
      <WeekLiveContent />
      <TopTenContent />
      <LineUpContent />
      <ReviewContent />
    </div>
  );
}

export default App;
