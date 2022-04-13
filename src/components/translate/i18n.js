import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { messages } from './languages'

// Configutação Padrão do i18n - biblioteca que gerencia o translate da página.
i18n
    .use(LanguageDetector)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: 'pt',
        ns: ['translations'],
        resources: messages
    })

export { i18n }