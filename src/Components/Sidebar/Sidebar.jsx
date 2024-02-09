import React, { useState } from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Logo from "../../assets/Shop.svg";
import "./Sidebar.css"
import { GoHomeFill } from "react-icons/go";
import { HiMiniUsers } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";
import { BiSitemap } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";

const sidebarItems = [
    {
        Icon: <GoHomeFill/>,
        name: "Home",
    },
    {
        Icon: <HiMiniUsers/>,
        name: "Parties",
        extraIcon: <FaPlus/>
    },
    {
        Icon: <BiSitemap/>,
        name: "Items",
        extraIcon: <FaPlus/>
    },
    {
        Icon: <BiSitemap/>,
        name: "Sale",
        extraIcon: <IoIosArrowDown/>
    },
    {
        Icon: <IoCart/>,
        name: "Purchase",
        extraIcon: <IoIosArrowDown/>
    },
    {
        Icon: <CiMoneyBill/>,
        name: "Quick Billing",
    },
    {
        Icon: <CiMoneyBill/>,
        name: "Expenses",
    },
    {
        Icon: <FaWallet/>,
        name: "Cash & Bank",
        extraIcon: <IoIosArrowDown/>
    },
    {
        Icon: <IoStorefrontSharp/>,
        name: "My Online Store",
    },
    {
        Icon: <IoStatsChart/>,
        name: "Reports",
    },
]


const Sidebar = () => {

    const [activeItems, setActiveItems] = useState("Home");

    const handleActiveItems = (item) => {
        setActiveItems(item)
    }

  return (
    <div className='sidebar-container'>
        <section className="sidebar-top-section">
            <div className="sidebar-top-logo-div">
                <img src={Logo} alt="logo" className="sidebar-top-img" />
                <span className="sidebar-top-img-plus">+</span>
            </div>
            <h3 className='sidebar-top-heading'>My Company</h3>
            <div className="sidebar-left-icon">
                <MdOutlineArrowForwardIos/>
            </div>
        </section>
        <div className='sidebar-top-border'></div>
        <div className="sidebar-main">
            {sidebarItems.map((items, index) => (
                <div onClick={() => handleActiveItems(items.name)} className={`sidebar-items-div ${activeItems == items.name && "active-nav-border"}`}>
                    <aside className='sidevar-items-aside1'>
                    <div className="sidebar-items-con">
                        {items.Icon}
                    </div>
                    <div className="sidebar-items-text">
                        {items.name}
                    </div>
                    </aside>
                    {items.extraIcon && (
                    <div className="sidebar-items-extra-icon">
                        {
                            items.extraIcon
                        }
                    </div>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar