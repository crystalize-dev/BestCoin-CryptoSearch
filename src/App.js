import './App.css';
import AppRouter from "./routing/AppRouter";
import {TranslationProvider} from "i18nano";
import {translations} from "./localization/translations";


function App() {
    return (
        <TranslationProvider translations={translations}
                             transition={true}
                             preloadFallback={true}
                             preloadLanguage={true}
                             fallback={'en'} language={'en'}>
                <AppRouter/>
        </TranslationProvider>
    );
}

export default App;
