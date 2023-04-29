import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

function Welcome() {
const lang = useContext(LanguageContext);
  return (
    <div>
      This is the Welcome Page.
      It is in {lang}
    </div>
  )
}

export default Welcome
