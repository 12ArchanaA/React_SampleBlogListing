import React, { useState } from "react";

import Modal from "./Modal";

const CardItem = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="cards_item">
        <button onClick={handleButton}>
          <div className="cards_item_link">
            <div className="cards_item_pic_wrap">
              <img className="cards_item_img" src={userData.thumb}></img>
            </div>
            <div className="cards_item_info">
              <h3 className="cards_item_heading">{userData.title}</h3>
              <div className="cards_item_text">{userData.slug}</div>
            </div>
          </div>
        </button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          userData={userData}
        ></Modal>
      </div>
    </>
  );
};

export default CardItem;
