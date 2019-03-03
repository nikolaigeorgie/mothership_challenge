import DirectionsScreen from '../scenes/DirectionsScreen';
import RideHistoryScreen from '../scenes/RideHistoryScreen';
import QuoteScreen from '../scenes/QuoteScreen';
import SummaryScreen from '../scenes/SummaryScreen';
import BottomPanel from '../components/Modals/BottomPanel';

export const pagesMap = [
  // PAGES
  { id: 'DirectionsScreen', component: DirectionsScreen },
  { id: 'RideHistoryScreen', component: RideHistoryScreen },
  { id: 'QuoteScreen', component: QuoteScreen },
  { id: 'SummaryScreen', component: SummaryScreen },
  // MODALS
  { id: 'BottomPanel', component: BottomPanel },
];
