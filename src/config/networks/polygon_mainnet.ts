import MaticLogo from 'src/config/assets/token_matic.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://safe-client.mainnet.staging.gnosisdev.com/v1', // TODO
  txServiceUrl: 'https://safe-transaction.mainnet.staging.gnosisdev.com/api/v1', // TODO
  safeAppsUrl: 'https://safe-apps.dev.gnosisdev.com', // TODO
  gasPriceOracle: {
    url: 'https://gasstation-mainnet.matic.network',
    gasParameter: 'standart',
  },
  rpcServiceUrl: 'https://polygon-mainnet.infura.io:443/v3',
  networkExplorerName: 'PolygonExplorer',
  networkExplorerUrl: 'https://explorer-mainnet.maticvigil.com',
  networkExplorerApiUrl: 'https://mainnet.maticvigil.com/api/',
}

const polygon_mainnet: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      safeAppsUrl: 'https://safe-apps.staging.gnosisdev.tachyonic.finance', // TODO
    },
    production: {
      ...baseConfig,
      clientGatewayUrl: 'https://safe-client.polygon_mainnet.tachyonic.finance/v1', // TODO
      txServiceUrl: 'https://safe-transaction.polygon_mainnet.tachyonic.finance/api/v1', // TODO
      safeAppsUrl: 'https://apps.tachyonic.finance', // TODO
    },
  },
  network: {
    id: ETHEREUM_NETWORK.POLYGON_MAINNET,
    backgroundColor: '#E8E7E6',
    textColor: '#001428',
    label: 'Polygon mainnet',
    isTestNet: false,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
      logoUri: MaticLogo,
    },
  },
}

export default polygon_mainnet
