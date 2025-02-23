import type {
  CommonDeviceAttributes,
  Device,
  JoinableDeviceAttributes,
  OtaUpdatableDeviceAttributes,
} from './Device'
import type { Room } from '../Room'

export interface BlindsAttributes
  extends CommonDeviceAttributes,
    JoinableDeviceAttributes,
    OtaUpdatableDeviceAttributes {
  batteryPercentage: number
  blindsTargetLevel: number
  blindsCurrentLevel: number
  blindsState: 'stopped' | 'up' | 'down'
}

export interface Blinds extends Device {
  type: 'blinds'
  deviceType: 'blinds'
  attributes: BlindsAttributes
  room: Room
  isHidden: boolean
}
