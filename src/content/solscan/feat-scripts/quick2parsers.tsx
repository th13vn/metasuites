import { createRoot } from 'react-dom/client'
import $ from 'jquery'

import { ParsersButton } from '../components'

const renderAlternativeParsers = async () => {
  if ($('#__metadock-alternative-parsers__').length) return
  const container = $(
    '#__next > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)'
  )
  const txHash = container.text().trim()
  const rootEl = $(
    '<span id="__metadock-alternative-parsers__" class="inline-flex align-middle ml-1"></span>'
  )
  container.append(rootEl)

  createRoot(rootEl[0]).render(<ParsersButton txHash={txHash} />)
}

export default renderAlternativeParsers
