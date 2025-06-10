import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupService, setPopupService] = useState("");

  const openModal = (service) => {
    setPopupService(service);
    setIsPopupOpen(true);
  };

  const closeModal = () => {
    setIsPopupOpen(false);
    setPopupService("");
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, openModal, closeModal, popupService }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);