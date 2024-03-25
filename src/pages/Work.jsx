import React from "react";
import { useDispatch, useSelector  } from 'react-redux'
import { toggleTheme, portfolioSelector} from '../redux/portfolio/portfolioSlice.js'
import { Link } from "react-router-dom";
import style from "./work.module.scss";
import back from '../assets/images/back.png'
import classname from "classname";

const Work = () => {
  
  const dispatch = useDispatch()
  const {works} = useSelector(portfolioSelector)
  
 

  return (
    <>
    <div class = "themeBtn" onClick={() => dispatch(toggleTheme())}></div>
    <Link  to={"/"}> <img class = "back__foto" src={back} alt=""/></Link>
      <div className={style.work}>
        <div className={style.work__box}>
          {works.map((item) => (
            <div className={style.work__card} key={item.name}>
              <div className={style.work__card_left}>
                <div className={style.work__img}>
                  <img className={style.img} src={item.img} alt="" />
                </div>
              </div>
              <div className={style.work__card_right}>
                <p className={style.work__title}>
                  {item.name}
                </p>
               
                <p className={style.work__p}>{item.skills}</p>
                <div className={style.work__right_box}>
                <a
                  href={item.code}
                  className={classname(style.work__p, style.button)}
                >
                  сode
                </a>
                <a
                  href={item.url}
                  className={classname(style.work__p, style.button)}
                >
                  website
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
