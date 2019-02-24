/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { startApp } from './app/navigation';
import { configureMapBox } from './app/config/MapboxClient';

configureMapBox();
startApp();
