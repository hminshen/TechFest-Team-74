import type { AppProps } from 'next/app'
import { QuestionProvider } from '../components/context/QuestionContext'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <QuestionProvider>
        <Component {...pageProps} />
      </QuestionProvider>
    </div>
  )
}