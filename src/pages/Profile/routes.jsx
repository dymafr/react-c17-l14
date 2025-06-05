import ProfileOverview from './pages/ProfileOverview/ProfileOverview';
import ProfileData from './pages/ProfileData/ProfileData';
import ProfileForm from './pages/ProfileForm/ProfileForm';
import { profileFormAction } from '../../actions/profileFormAction';

export const PROFILE_ROUTES = [
  {
    index: true,
    Component: ProfileOverview,
  },
  {
    path: 'data',
    Component: ProfileData,
  },
  {
    path: 'form',
    action: profileFormAction,
    Component: ProfileForm,
  },
];
