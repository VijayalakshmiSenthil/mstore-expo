/** @format */

import reactotron from 'reactotron-react-native';

import { DEV_ENV } from '@app/Omni';

import _Color from './Color';
import _Constants from './Constants';
import _Config from './Config';
import _AppConfig from './AppConfig.json';
import _Icons from './Icons';
import _Images from './Images';
import _Languages from './Languages';
import _Styles from './Styles';
import _Tools from './Tools';
import _Layout from './Layout';
import _Validator from './Validator';
import _Events from './Events';
import _Device from './Device';
// import _Theme from './Theme';
import { ThemeProvider, withTheme, themes } from './Theme';

export const Color = _Color;
export const Constants = _Constants;
export const Config = _Config;
export const AppConfig = _AppConfig;
export const Icons = _Icons;
export const Images = _Images;
export const Languages = _Languages;
export const Styles = _Styles;
export const Tools = _Tools;
export const Layout = _Layout;

export const HorizonLayouts = AppConfig.HorizonLayout;
export const Validator = _Validator;
export const Events = _Events;
export const Device = _Device;

export { ThemeProvider, withTheme, themes };

export const log = values => DEV_ENV && reactotron.log(values);
export const warn = values => DEV_ENV && reactotron.warn(values);
export const error = values => DEV_ENV && reactotron.error(values);
