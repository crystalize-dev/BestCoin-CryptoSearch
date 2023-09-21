import './App.css';
import AppRouter from "./routing/AppRouter";
import {TranslationProvider} from "i18nano";
import {translations} from "./localization/translations";


function App() {
    return (
        <TranslationProvider translations={translations}
                             transition={true}
                             preloadFallback={true}
                             fallback={'ru'}>
            <AppRouter/>
        </TranslationProvider>
    );
}

export default App;
