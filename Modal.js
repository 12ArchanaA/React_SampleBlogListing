import React from "react";
import "./Modal.css";

const Modal = ({ open, children, onClose, userData }) => {
  if (!open) return null;

  return (
    <>
      <div className="overlay" />
      <div className="modal-container">
        <div className="modal-close">
          <div className="close" onClick={onClose}>
            x
          </div>
        </div>
        <div className="modal-content">
          <div className="modal_item_link">
            <div className="modal_pic_wrap">
              <img className="modal_img" src={userData.thumb}></img>
            </div>
            <div className="modal_item_info">
              <h4 className="modal_item_heading">{userData.title}</h4>
              <div className="cards_item_text">
                {userData.short_description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
