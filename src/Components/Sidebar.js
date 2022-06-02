import React, { useState } from "react";
import userImage from "../Images/userImage.jpg";
import logo from "../Images/brandLogo.png";
import {
  IoMdHome,
  IoIosStarHalf,
  IoMdThumbsUp,
  IoIosHeart,
  IoIosGift,
  IoIosInformationCircleOutline,
  IoIosChatboxes,
  IoMdSave,
  IoMdWallet,
  IoIosSettings,
} from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState("Home");

  const generalMenuList = [
    { name: "Home", icon: IoMdHome },
    { name: "Rating", icon: IoIosStarHalf },
    { name: "Popular", icon: IoMdThumbsUp },
    { name: "Favorite", icon: IoIosHeart },
    { name: "Bonuses", icon: IoIosGift },
    { name: "About", icon: IoIosInformationCircleOutline },
  ];

  const accountMenuList = [
    { name: "Chats", icon: IoIosChatboxes },
    { name: "Save", icon: IoMdSave },
    { name: "Wallet", icon: IoMdWallet },
    { name: "Settings", icon: IoIosSettings },
  ];

  const handleActiveOption = (option) => setActiveOption(option);

  return (
    <div className='sidebar-main'>
      <div className='sidebar-header'>
        <img src={logo} alt='' />
      </div>
      <div className='sidebar-menus'>
        <div className='general-menulist'>
          <div className='menuitem-title'>
            <span>General</span>
          </div>
          {generalMenuList.map((item, index) => {
            const { name } = item;
            const IconElement = React.createElement(item.icon, {
              className: "menu-icon",
            });
            return (
              <div
                className={
                  activeOption === name ? "menuitem active" : "menuitem"
                }
                onClick={() => handleActiveOption(name)}
                key={index}
              >
                {IconElement}
                <span>{name}</span>
              </div>
            );
          })}
        </div>
        <div className='account-menulist'>
          <div className='menuitem-title'>
            <span>Account</span>
          </div>
          {accountMenuList.map((item, index) => {
            const { name } = item;
            const IconElement = React.createElement(item.icon, {
              className: "menu-icon",
            });
            return (
              <div
                className={
                  activeOption === name ? "menuitem active" : "menuitem"
                }
                onClick={() => handleActiveOption(name)}
                key={index}
              >
                {IconElement}
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className='sidebar-username'>
        <img className='user-image' src={userImage} alt='' />
        <span> Name Surname </span>
        <div>
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
