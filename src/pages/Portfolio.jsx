import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleLanguage,
  portfolioSelector,
} from "../redux/portfolio/portfolioSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./portfolio.module.scss";
import Bg1 from "../assets/images/BG1.webp";
import clsx from "clsx";
import { useSpring, animated} from "react-spring";

const Portfolio1 = () => {
  const dispatch = useDispatch();
  const { language } = useSelector(portfolioSelector);
  const { t, i18n } = useTranslation();

  const [menu, setMenu] = useState([
    {text: "hello", to: "/about", className: clsx(style.portfolio__link, style.grey), mouseEnter: "about", mouseLeave: "hello"},
    {text: "i", to: "/work", className: clsx(style.portfolio__link, style.red), mouseEnter: "work", mouseLeave: "i"},
    {text: "name", to: "/contact", className: clsx(style.portfolio__link, style.red), mouseEnter: "contact", mouseLeave: "name"},
  ]);
  
  const [clickMenu, setClickMenu] = useState(true);
    const onMouseEnterHandler = (index) => {
    const updatedMenu = [...menu];
    updatedMenu[index].text = updatedMenu[index].mouseEnter;
    setMenu(updatedMenu);
  };
  
   const onMouseLeaveHandler = (index) => {
    const updatedMenu = [...menu];
    updatedMenu[index].text = updatedMenu[index].mouseLeave;
    setMenu(updatedMenu);};
  
   const onClickHandler = (event) => {
    setClickMenu(!clickMenu);
    if (window.innerWidth < 768 && clickMenu) {
      event.preventDefault();
    }};
  
  useEffect(() => {
  }, [menu]);
  
  const [isMoved1, setIsMoved1] = useState(false);
  const [isMoved2, setIsMoved2] = useState(false);
  const [isMoved3, setIsMoved3] = useState(false);
  
  const styles = useSpring({
    display: isMoved1 ? "block" : "none",
    transform: isMoved1 ? "translateY(0px)" : "translateY(30px)",
    opacity: isMoved1 ? 1 : 0,
    config: { duration: 300 },
  });
  const styles1 = useSpring({
    display: isMoved2 ? "block" : "none",
    transform: isMoved2 ? "translateY(0px)" : "translateY(30px)",
    opacity: isMoved2 ? 1 : 0,
    config: { duration: 300 },
  });
  const styles2 = useSpring({
    display: isMoved3 ? "block" : "none",
    transform: isMoved3 ? "translateY(0px)" : "translateY(30px)",
    opacity: isMoved3 ? 1 : 0,
    config: { duration: 300 },
  });
  
  const asyncTimeout = async () => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
      await delay(300);
      setIsMoved1(true);
      await delay(300);
      setIsMoved2(true);
      await delay(300);
      setIsMoved3(true);};

  useEffect(() => {
    asyncTimeout();
  }, []);
  
  useEffect(() => {
      setIsMoved1(false);
      setIsMoved2(false);
      setIsMoved3(false);
      asyncTimeout();
  }, [clickMenu]);
  
  const changeLanguage = () => {
    dispatch(toggleLanguage());
    setIsMoved1(false);
    setIsMoved2(false);
    setIsMoved3(false);
    asyncTimeout()
  }
  
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsMoved1(true);
  //     setTimeout(() => {
  //       setIsMoved2(true);
  //       setTimeout(() => {
  //         setIsMoved3(true);
  //       }, 300);
  //     }, 300);
  //   }, 300);
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div className={style.portfolio} >
      <div className="container">
      <div className={style.portfolio__img} >
        <img className={style.img} src={Bg1} alt="" />
        </div>
      
        <button
          className="changeLanguage"
          onClick={() =>changeLanguage()}
          
        >
          {language}
        </button>
        <ul className={style.portfolio__list}>
          {menu.map((item, index) => (
            <li key={index} className={style.portfolio__li}>
              <Link
                to={ item.to}
                className={item.className}
                onMouseEnter={() => onMouseEnterHandler(index)}
                onMouseLeave={() => onMouseLeaveHandler(index)}
                onClick={onClickHandler}
              >
                <animated.p
                  style={{
                    ...((index === 0 && styles) ||
                      (index === 1 && styles1) ||
                      (index === 2 && styles2)),
                    willChange: "transform",
                  }}
                >
                  {clickMenu ? t(item.text) : t(item.mouseEnter)}
                </animated.p>
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.tap} onClick={() => setClickMenu(!clickMenu)}>{t('taphere')}</div>
      </div>
      </div>
  );
};

export default Portfolio1;
