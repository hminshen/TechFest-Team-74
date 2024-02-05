import type { AppProps } from 'next/app'
import { QuestionProvider } from '../components/context/QuestionContext'
import { PreInterviewInfoProvider } from '../components/context/PreInterviewContext'
import { FeedbackProvider } from '../components/context/FeedbackContext'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <FeedbackProvider>
        <PreInterviewInfoProvider>
          <QuestionProvider>
            <Component {...pageProps} />
          </QuestionProvider>
        </PreInterviewInfoProvider>
      </FeedbackProvider>
    </div>
  )
}