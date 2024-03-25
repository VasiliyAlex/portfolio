import {createSlice} from "@reduxjs/toolkit";
import i18n from "../../i18n";
import adidas from "../../assets/images/adidas.jpg";
import goTrip from "../../assets/images/gotrip.jpg";
import totembo from "../../assets/images/totembo.svg";
import nike from "../../assets/images/nike.jpg";
import airpods from "../../assets/images/airpods.jpg";
import grayson from "../../assets/images/grayson.jpg";
import game from "../../assets/images/game.png";
import clock from "../../assets/images/clock.png";
import githubFinder from "../../assets/images/githubFinder.png";
import ReactRouter from "../../assets/images/ReactRouter.png";
import basket from "../../assets/images/basket.png";
import weather from "../../assets/images/weather.png";
import todo from "../../assets/images/todo.png";

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        language: 'ru',
        theme: 'light',
        works : [
            {
              name: "Adidas",
              skills: 'HTML CSS',
              url: "https://vasiliyalex.github.io/adidas",
              code: "https://github.com/VasiliyAlex/adidas",
              img: adidas,
            },
            {
              name: "GoTrip",
              skills: 'HTML CSS',
              url: "https://vasiliyalex.github.io/GoTrip",
              code: "https://github.com/VasiliyAlex/GoTrip",
              img: goTrip,
            },
            {
              name: "Totembo",
              skills: 'HTML CSS',
              url: "https://vasiliyalex.github.io/totembo",
              code: "https://github.com/VasiliyAlex/totembo",
              img: totembo,
            },
            {
              name: "Nike",
              skills: 'HTML CSS',
              url: "https://vasiliyalex.github.io/nike",
              code: "https://github.com/VasiliyAlex/nike",
              img: nike,
            },
            {
              name: "Airpods",
              skills: 'HTML CSS',
              url: "https://vasiliyalex.github.io/airpods",
              code: "https://github.com/VasiliyAlex/airpods",
              img: airpods,
            },
            {
              name: "Grayson",
              skills: 'HTML CSS',
              url: "https://vasiliyalex.github.io/grayson",
              code: "https://github.com/VasiliyAlex/grayson",
              img: grayson,
            },
            {
              name: "Game",
              skills: 'HTML CSS JavaScript',
              url: "https://vasiliyalex.github.io/game",
              code: "https://github.com/VasiliyAlex/game",
              img: game,
            },
            {
              name: "Clock",
              skills: 'HTML CSS JavaScript',
              url: "https://vasiliyalex.github.io/clock",
              code: "https://github.com/VasiliyAlex/clock",
              img: clock,
            },
            {
              name: "GithubFinder",
              skills: 'HTML CSS JavaScript React',
              url: "https://vasiliyalex.github.io/githubFinder",
              code: "https://github.com/VasiliyAlex/githubFinder",
              img: githubFinder,
            },
            {
              name: "ReactRouter",
              skills: 'HTML CSS JavaScript React',
              url: "https://vasiliyalex.github.io/ReactRouter",
              code: "https://github.com/VasiliyAlex/ReactRouter",
              img: ReactRouter,
            },
            {
              name: "Basket",
              skills: 'HTML CSS JavaScript React',
              url: "https://vasiliyalex.github.io/basket",
              code: "https://github.com/VasiliyAlex/basket",
              img: basket,
            },
            {
              name: "Weather",
              skills: 'HTML CSS JavaScript React',
              url: "https://vasiliyalex.github.io/weather",
              code: "https://github.com/VasiliyAlex/weather",
              img: weather,
            },
            {
              name: "Todolist",
              skills: 'HTML CSS TypeScript React',
              url: "https://vasiliyalex.github.io/todolist",
              code: "https://github.com/VasiliyAlex/todolist",
              img: todo,
            },
          ]
    },
    reducers: {
        toggleLanguage(state, action) {
            const currentLanguage = state.language == 'en' ? 'ru' : 'en'
            i18n.changeLanguage(state.language)
            
            state.language = currentLanguage;
            localStorage.setItem('language', currentLanguage)
        },
        initLanguage(state) {
            const getLanguage = localStorage.getItem('language')
            if (getLanguage) {
                state.language = getLanguage
                // i18n.changeLanguage(state.language)
            }
        },
        toggleTheme(state, action) {
            const currentTheme = state.theme == 'light' ? 'dark' : 'light'
            state.theme = currentTheme
            localStorage.setItem('theme', currentTheme)
        },
        initTheme(state) {
            const getTheme = localStorage.getItem('theme')
            if (getTheme) {
                state.theme = getTheme
            }
        },

    }
})
export const { toggleLanguage, initLanguage, toggleTheme, initTheme } = portfolioSlice.actions
export const portfolioSelector = (state) => state.portfolio
export default portfolioSlice.reducer