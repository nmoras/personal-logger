// @flow

import React from 'react';
import { css } from 'glamor';
import { NotFoundIcon } from '../components/SvgIcons';

export default function LoadingError() {
  return (
    <div
      {...css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      })}
    >
      <NotFoundIcon {...css({ width: '5rem', height: '5rem' })} />
    </div>
  );
}
