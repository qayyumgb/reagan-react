
import UilSignout from '@iconscout/react-unicons/icons/uil-signout';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { InfoWraper} from './auth-info-style';
import { logOut } from '../../../redux/authentication/actionCreator';


const AuthInfo = React.memo(() => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    flag: 'en',
  });
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { flag } = state;

  const SignOut = (e) => {
    e.preventDefault();
    dispatch(logOut(() => navigate('/')));
  };

  return (
    <InfoWraper>
     
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__author">
      <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <UilSignout /> Sign Out
        </Link>
      </div>
    </InfoWraper>
  );
});

export default AuthInfo;
