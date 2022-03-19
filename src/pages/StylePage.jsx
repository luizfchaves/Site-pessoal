// TODO(Luiz) Depois de refatorar a styleitems, remover esses eslint-disables
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';

import StyleItems from '../components/StyleItems';

function StylePage() {
  useEffect(() => {
    document.title = 'LC - Style page';
  }, []);
  return (
    <div className="content">
      <StyleItems />
    </div>
  );
}

export default StylePage;
