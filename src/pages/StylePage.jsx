import React, { useEffect } from "react";

import StyleItems from "../components/StyleItems";

const StylePage = () => {
  useEffect(() => {
    document.title = "LC - Style page";
  }, []);
  return (
    <div className="content">
      <StyleItems />
    </div>
  );
};

export default StylePage;
