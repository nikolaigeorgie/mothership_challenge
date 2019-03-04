import DirectionsScreen from '../scenes/DirectionsScreen';
import RideHistoryScreen from '../scenes/RideHistoryScreen';
import QuoteScreen from '../scenes/QuoteScreen';
import SummaryScreen from '../scenes/SummaryScreen';
import BottomPanel from '../components/Modals/BottomPanel';
import MenuScreen from '../scenes/MenuScreen';

export const pagesMap = [
  // PAGES
  { id: 'MenuScreen', component: MenuScreen },
  { id: 'DirectionsScreen', component: DirectionsScreen },
  { id: 'RideHistoryScreen', component: RideHistoryScreen },
  { id: 'QuoteScreen', component: QuoteScreen },
  { id: 'SummaryScreen', component: SummaryScreen },
  // MODALS
  { id: 'BottomPanel', component: BottomPanel },
];
