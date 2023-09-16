import './App.css';
import AppRouter from "./routing/AppRouter";
import {useEffect, useState} from "react";
import {LangContext} from "./context/LangContext";


function App() {
    const [lang, setLang] = useState('en')

    const switchLang = () => {
        lang === 'ru' ? setLang('en') : setLang('ru')
    }

  useEffect(() => {
    let root = document.getElementById('root')

    if (lang === 'ru') {
      root.setAttribute('data-lang', 'ru')
      localStorage.setItem('language', 'ru')
    } else {
      root.setAttribute('data-lang', 'en')
      localStorage.setItem('language', 'en')
    }
  }, [lang])

    return (
        <LangContext.Provider value={{lang, switchLang}}>
            <AppRouter/>
        </LangContext.Provider>
    );
}

export default App;
