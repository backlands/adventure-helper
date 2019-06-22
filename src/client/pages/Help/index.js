import React from 'react';
import { faQuestion } from '@fortawesome/pro-light-svg-icons';

import Header from '../../components/Header';
import './styles.scss';

/* eslint-disable max-len */
const Help = () => (
  <React.Fragment>
    <Header title='Help' icon={faQuestion} />

    <div className='Help'>
      <p>If you experience any difficulty using the tools presented here, you can contact me with details by submitting a request to me at the form found <a href='https://forms.gle/qPnEsJYiXBcJFD6W8' target='_blank'>here</a>.</p>

      <p>Please note, the form linked above is provided by Google, I cannot guarantee what personal data Google may collect from your access to the form or your submission.</p>

      <h3>General Information</h3>
      <p>The AdventureHelper toolset is built by one person as a labour of love, both for the Pathfinder Roleplaying Game and for Web Development. I do not seek financial or monetary gain by providing these tools to the fellow fans of tabletop games.</p>

      <p>I hope that if you are reading this, you have enjoyed using the tools I have built so far. I plan to continue adding to these tools as I feel inspired and see an area of need.</p>
    </div>
  </React.Fragment>
);

export default Help;
