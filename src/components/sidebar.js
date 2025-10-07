'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { KeyboardArrowDown } from "@mui/icons-material";
import MenuItems from "./menuItems";

const Sidebar = () => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);

  useEffect(() => {
    if (!pathname) return;
    const firstPath = "/" + pathname.split("/")[1];

    let activeModuleIndex = null;
    let activeSubModule = null;

    MenuItems.forEach((item, index) => {
      if (item.href && item.href === "/" && firstPath === "/") activeModuleIndex = 0;
      if (item.href && item.href.startsWith(firstPath) && item.href !== "/") activeModuleIndex = index;
      if (item.item) {
        const matched = item.item.find((sub) => sub.href === pathname);
        if (matched) {
          activeModuleIndex = index;
          activeSubModule = matched.href;
        }
      }
    });

    setOpenIndex(activeModuleIndex);
    setActiveSubItem(activeSubModule);
  }, [pathname]);

  const toggleMenu = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img 
          src="/logo.png" 
          alt="VED VENTURING DIGITALLY" 
          style={{ 
            maxWidth: '160px',
            maxHeight: '40px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      <nav className="menu-container">
        {MenuItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="menu-item">
              {item.item ? (
                <div className="menu-link" onClick={() => toggleMenu(index)}>
                  <div className="menu-left">
                    {item.icon && (
                      <item.icon
                        className="menu-icon"
                        style={{ fontSize: '20px', marginRight: '12px' }}
                      />
                    )}
                    <span className="menu-label">{item.label}</span>
                  </div>
                  <KeyboardArrowDown className={`menu-arrow ${isOpen ? "active" : ""}`} />
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className={`menu-link ${pathname === item.href ? "active" : ""}`}
                >
                  <div className="menu-left">
                    {item.icon && (
                      <item.icon
                        className="menu-icon"
                        style={{ fontSize: '20px', marginRight: '12px' }}
                      />
                    )}
                    <span className="menu-label">{item.label}</span>
                  </div>
                </Link>
              )}

              {item.item && isOpen && (
                <div className="submenu">
                  {item.item.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={`submenu-link ${activeSubItem === subItem.href ? "active" : ""}`}
                    >
                      <span className="submenu-text">{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;