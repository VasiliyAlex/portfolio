import {useRef} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch,useSelector  } from 'react-redux'
import { toggleTheme, toggleLanguage, portfolioSelector } from '../redux/portfolio/portfolioSlice.js'
import { Link } from "react-router-dom";
import style from "./contact.module.scss";
import telegram from "../assets/images/telegram.svg";
import discord from "../assets/images/discord.svg";
import mail from "../assets/images/mail.svg";
import telephone from "../assets/images/tel.svg";
import emailjs from '@emailjs/browser';
import back from '../assets/images/back.png'

const Contact = () => {
  
  const dispatch = useDispatch()
  const {t, i18n} = useTranslation()
  const {language} = useSelector(portfolioSelector)
  
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_92horzg', 'template_55sfplz', form.current, {
        publicKey: 'LkdWMqEohejslz38U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.form.reset()
  };
  
  return (
    <div className={style.contact}>
      <div className="container">
      <div class = "themeBtn" onClick={() => dispatch(toggleTheme())}></div>
      <Link  to={"/"}> <img class = "back__foto" src={back} alt=""/></Link>
      <button class="changeLanguage" onClick={() => dispatch(toggleLanguage())}>{ language}</button >
        <h1 className={style.contact__title}>{t('contact_title')}</h1>
        <p className={style.contact__p}>{t('contact_p1')}</p>
        <p className={style.contact__p}>{t('contact_p2')}</p>
        
        <div className={style.footer}>
        <div className={style.media}>
          <div className={style.media__box}>
            <img className={style.media__img} src={telegram} alt="" />
            <p  className={style.media__link}>@VasiliyAleksandrovich86</p>
          </div>
          <div className={style.media__box}>
            <img className={style.media__img} src={telephone} alt="" />
            <p  className={style.media__link}> +99890 927 09 72</p>
          </div>
          <div className={style.media__box}>
            <img className={style.media__img} src={mail} alt="" />
            <p  className={style.media__link}>vasiliyalexsandrovich@gmail.com</p>
          </div>
          <div className={style.media__box}>
            <img className={style.media__img} src={discord} alt="" />
            <p href="" className={style.media__link}>vasiliy986</p>
          </div>
        </div>
        <div className={style.letter}>
          <h2 className={style.letter__title}></h2>
          <form 
          ref = {form} 
          action="" className={style.letter__form}>
            <input
              type="text"
              placeholder={t('fullName')}
              name="User_name"
              required
              className={style.letter__form_input}
            />
            <input
              type="email"
              placeholder={t('email')}
              name="User_email"
              required
              className={style.letter__form_input}
            />
            <input
              type="text"
              placeholder={t('subject')}
              name="subject"
              required
              className={style.letter__form_input}
            />
            <textarea className={style.letter__form_input} name="message"  cols="30" rows="8"></textarea>
            <button type = "submit" className={style.letter__form_input} onClick={sendEmail}>{t('send_message')}</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
