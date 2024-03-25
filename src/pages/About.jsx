import { useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useDispatch,useSelector  } from 'react-redux'
import { toggleTheme, toggleLanguage, portfolioSelector } from '../redux/portfolio/portfolioSlice.js'
import style from "./about.module.scss";
import photo from '../assets/images/photo3.png'
import back from '../assets/images/back.png'

const About = () => {
  
  const {t, i18n} = useTranslation()
  const {language} = useSelector(portfolioSelector)
  const dispatch = useDispatch()
  
  
  return (
   
    <div className={style.about}>
      <div className="container">
      <div class = "themeBtn" onClick={() => dispatch(toggleTheme())}></div>
      <img class = "back__foto" src={back} alt=""/>
      <Link  to={"/"}> <img class = "back__foto" src={back} alt=""/></Link>
      <button class="changeLanguage" onClick={() => dispatch(toggleLanguage())}>{ language }</button >
      
        <h1 className={style.about__title}>{t('about__title')}</h1>
        <div className={style.about__box}> 
        
        <img src={photo} alt="" className={style.about__box_img} />
        <p className={style.about__p}>{t('about__p1')}</p>
        <p className={style.about__p}>{t('about__p2')}</p>
        <p className={style.about__p}>{t('about__p3')}</p>
        </div>
        
        <ul className={style.about__list}>{t('soft_skills')}
          <li className={style.about__link}>{t('soft_skills1')}</li>
          <li className={style.about__link}>{t('soft_skills2')}</li>
          <li className={style.about__link}>{t('soft_skills3')}</li>
          <li className={style.about__link}>{t('soft_skills4')}</li>
          <li className={style.about__link}>{t('soft_skills5')}</li>
          <li className={style.about__link}>{t('soft_skills6')}</li>
          <li className={style.about__link}>{t('soft_skills7')}</li>
          <li className={style.about__link}>{t('soft_skills8')}</li>
          <li className={style.about__link}>{t('soft_skills9')}</li>
          <li className={style.about__link}>{t('soft_skills10')} </li>
          <li className={style.about__link}>{t('soft_skills11')}</li>
        </ul>

        <ul className={style.about__list}>{t('technical_skills')}
          <li className={style.about__link}>HTML</li>
          <li className={style.about__link}>CSS</li>
          <li className={style.about__link}>JavaScript</li>
          <li className={style.about__link}>React</li>
          <li className={style.about__link}>Git</li>
          <li className={style.about__link}>Figma Pixso</li>
        </ul>

        <ul className={style.about__list}>{t('weaknesses')}
        <li className={style.about__link}>{t('weaknesses1')}</li>
        <li className={style.about__link}>{t('weaknesses2')}</li>
        <li className={style.about__link}>{t('weaknesses3')} </li>
        <li className={style.about__link}>{t('weaknesses4')} </li>
        </ul>

        <ul className={style.about__list}>{t('education')}
        <li className={style.about__link}>{t('education1')}</li>
        <li className={style.about__link}>{t('education2')}</li>
        <li className={style.about__link}>{t('education3')} </li>
        </ul>
      </div>
    </div>
    
  );
};

export default About;
