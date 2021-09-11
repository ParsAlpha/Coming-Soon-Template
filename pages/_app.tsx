
import type { AppProps } from 'next/app'

import '../styles/styles.css'
import '../styles/Timer.css'
import '../styles/Optin.css'
import '../styles/subscription.css'
import '../styles/footer.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
