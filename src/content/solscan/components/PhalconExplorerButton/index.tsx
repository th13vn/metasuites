import { type FC } from 'react'
import { Button, ConfigProvider } from 'antd'

import { PHALCON_EXPLORER_DOMAIN } from '@common/config/uri'

import styles from './index.module.less'

interface Props {
  txHash: string
}

const PhalconExplorerButton: FC<Props> = ({ txHash }) => {
  const handleClick = () => {
    window.open(`${PHALCON_EXPLORER_DOMAIN}/tx/solana/${txHash}`, '_blank')
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            controlHeight: 34,
            borderRadius: 8,
            fontSize: 12
          }
        }
      }}
    >
      <Button type="primary" className={styles.button} onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4.97136 6.67749C6.45817 5.96519 7.44247 5.62489 8.23283 5.35168C9.34886 4.96626 10.0843 4.71134 11.5736 3.63191C10.8564 3.30625 10.0599 3.12573 9.22201 3.12573C6.56307 3.12573 4.3298 4.94553 3.70044 7.40809C4.1005 7.1361 4.52495 6.89216 4.97258 6.67749H4.97136Z"
            fill="white"
          />
          <path
            d="M14.0362 9.967C13.2702 11.2794 12.2737 12.2454 11.0747 12.8394C10.4759 13.137 9.89773 13.3468 9.30984 13.4822C8.79147 13.6017 8.27676 13.659 7.73643 13.659C7.08267 13.659 6.49722 13.5749 5.93494 13.4834C6.86313 14.1396 7.99744 14.525 9.2208 14.525C12.3688 14.525 14.9204 11.9734 14.9204 8.82536C14.9204 8.59118 14.9058 8.36187 14.879 8.13501C14.6399 8.8034 14.3594 9.41569 14.0374 9.96578L14.0362 9.967Z"
            fill="white"
          />
          <path
            d="M14.996 2C14.9802 2.0183 14.9643 2.03537 14.9485 2.05367C14.3886 2.68181 13.7702 3.25629 13.1067 3.77222C9.65375 6.45922 9.42079 5.66031 5.54459 7.51791C1.40128 9.50358 1 13.4566 1 13.4566C4.85668 10.6111 6.59475 14.0104 10.7954 11.9296C15.2912 9.70238 14.996 2 14.996 2ZM8.9817 11.4136C8.9817 11.4136 7.47293 11.7759 5.50678 11.1087C5.50678 11.1087 4.66641 10.8416 3.99802 10.8416C3.99802 10.8416 4.09803 9.60725 6.97896 8.279C6.97774 8.30949 6.97652 8.33877 6.97652 8.36926C6.97652 9.47187 7.86933 10.3647 8.97194 10.3647C9.99161 10.3647 10.832 9.59993 10.9527 8.61441C10.5258 8.80103 10.0282 8.62417 9.83061 8.20947C9.71961 7.97651 9.72571 7.71672 9.82573 7.49595C9.90745 7.31544 10.0526 7.16054 10.2477 7.06784C10.277 7.0532 10.3075 7.04101 10.3368 7.03125C10.4929 6.97636 10.6454 6.90928 10.7942 6.83732C11.2906 6.59825 11.7687 6.31773 12.231 6.0189C12.7847 5.66153 13.3507 5.23464 13.7739 4.76993C13.7739 4.76993 13.0104 10.6696 8.9817 11.4148V11.4136Z"
            fill="white"
          />
        </svg>
        Phalcon Explorer
      </Button>
    </ConfigProvider>
  )
}

export default PhalconExplorerButton
