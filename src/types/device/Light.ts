import type {
  CommonDeviceAttributes,
  Device,
  IdentifiableDeviceAttributes,
  JoinableDeviceAttributes,
  OtaUpdatableDeviceAttributes,
} from './Device'
import type { Room } from '../Room'

export interface LightAttributes
  extends CommonDeviceAttributes,
    IdentifiableDeviceAttributes,
    JoinableDeviceAttributes,
    OtaUpdatableDeviceAttributes {
  isOn: boolean
  startupOnOff: 'startOn' | 'startPrevious'
  lightLevel: number
  colorHue?: number
  colorSaturation?: number
  colorTemperature?: number
  colorTemperatureMin?: number
  colorTemperatureMax?: number
  startupTemperature?: number
  colorMode?: 'temperature' | 'color'
  identifyStarted: string
  identifyPeriod: number
  circadianRhythmMode?: string
}

export interface Light extends Device {
  type: 'light'
  deviceType: 'light'
  attributes: LightAttributes
  room: Room
  isHidden: boolean
}
