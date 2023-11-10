
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import {ThemeProviderComponent} from "./app/providers/ThemeProvider";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProviderComponent>
                    <App />
                </ThemeProviderComponent>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);

