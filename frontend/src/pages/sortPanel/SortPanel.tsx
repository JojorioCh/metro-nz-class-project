import React from 'react';
import '../../styles/SortPanel.css';
import Sort from '../../srcAssets/smallIconsPng/sortArrow.png';
import SortFadeMenu from '../../common/searchpanel/SortFadeMenu';



const SortPanel = () => {
  return (
    <div className="spListingsContainer">
      Sort By 
      <SortFadeMenu />
    </div>
  );
};

export default SortPanel;
