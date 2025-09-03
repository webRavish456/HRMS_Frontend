'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Menuitems from "./MenuItems";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(null);


  const [activeSubItem, setActiveSubItem] = useState(null);

  useEffect(() => {
    const firstPath = "/" + pathname.split("/")[1]; 

    let activeModuleIndex = null;
    let activeSubModule = null;

    Menuitems.forEach((item, index) => {
      if (item.href.startsWith(firstPath)) {
        activeModuleIndex = index;
        if (item.item) {
          const matchedSub = item.item.find(sub => sub.href === pathname);
          if (matchedSub) {
            activeSubModule = matchedSub.href;
          }
        }
      }
    });

    setActiveIndex(activeModuleIndex);
    setActiveSubItem(activeSubModule);
  }, [pathname]);

  const toggleMenu = (index, item) => {
    if (item.item) {
      setActiveIndex(activeIndex === index ? null : index);
      if (activeIndex !== index) {
        // Navigate to the main href first, then expand submenu
        router.push(item.href);
        const firstSub = item.item[0].href;
        setActiveSubItem(firstSub);
      }
    } else {
      setActiveIndex(index);
      setActiveSubItem(null);
    }
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <div className="logo">
          <Image 
            src="/logo.png" 
            alt="VED VENTURING DIGITALLY" 
            width={180} 
            height={40}
            style={{ width: '120px', height: 'auto' }}
          />
        </div>
      </div>


      <nav className="menu-container">
        {Menuitems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className="menu-item">
              {item.item ? (
                <div 
                  className={`menu-link ${isActive ? 'active' : ''}`}
                  onClick={() => toggleMenu(index, item)}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {item.icon && (
                      <Image 
                        src={item.icon} 
                        alt={item.label} 
                        width={25} 
                        height={25}
                        className="menu-icon"
                      />
                    )}
                    <span className="menu-label">{item.label}</span>
                  </div>
                  <ChevronDown className={`menu-arrow ${isActive ? 'active' : ''}`} />
                </div>
              ) : (
                <Link href={item.href} className={`menu-link ${isActive ? 'active' : ''}`}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {item.icon && (
                      <Image 
                        src={item.icon} 
                        alt={item.label} 
                        width={25} 
                        height={25}
                        className="menu-icon"
                      />
                    )}
                    <span className="menu-label">{item.label}</span>
                  </div>
                </Link>
              )}

    
              {item.item && isActive && (
                <div className="submenu">
                  {item.item.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={`submenu-link ${activeSubItem === subItem.href ? 'active' : ''}`}
                      onClick={() => setActiveSubItem(subItem.href)}
                    >
                      <span>{subItem.label}</span>
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



