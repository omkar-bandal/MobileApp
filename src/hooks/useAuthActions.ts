import {bindActionCreators} from '@reduxjs/toolkit';
import {SignupActions} from '../store/slices/signupSlice';
import {RegisterActions} from '../store/slices/registerSlice';
import {LoginActions} from '../store/slices/loginSlice';
import {useAppDispatch} from './useRTK';

const useAuthActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(
    {
      ...SignupActions,
      ...RegisterActions,
      ...LoginActions,
    },
    dispatch,
  );
};

export default useAuthActions;
