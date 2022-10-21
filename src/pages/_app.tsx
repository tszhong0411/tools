import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          primaryColor: 'red',
          fontFamily:
            'Sora,Noto Sans TC,Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        }}
      >
        <Layout>
          <Global
            styles={() => ({
              html: {
                scrollBehavior: 'smooth',
              },
              '::selection': {
                background: 'rgb(249, 6, 6, 0.05)',
                color: '#f90606',
              },
              '::-webkit-scrollbar': {
                width: 7,
                height: 5,
              },
              '::-webkit-scrollbar-thumb': {
                background: '#ef4444',
                transition: '0.25s',
                borderRadius: 2,
              },
              '::-webkit-scrollbar-track': {
                background: '0 0',
              },
            })}
          />
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
