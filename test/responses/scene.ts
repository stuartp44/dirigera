import type { Scene } from '../../src'

export const scene: Scene = {
  id: '00000000-0000-0000-0000-000000000000',
  info: {
    name: 'All off',
    icon: 'scenes_moon',
  },
  type: 'userScene',
  triggers: [
    {
      id: '00000000-0000-0000-0000-000000000000',
      type: 'app',
      triggeredAt: '2000-01-01T00:00:00.000Z',
      disabled: false,
    },
    {
      id: '00000000-0000-0000-0000-000000000000',
      type: 'controller',
      triggeredAt: '2000-01-01T00:00:00.000Z',
      disabled: false,
      trigger: {
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        controllerType: 'shortcutController',
        clickPattern: 'singlePress',
        buttonIndex: 0,
        deviceId: '00000000-0000-0000-0000-000000000000',
      },
    },
    {
      id: '00000000-0000-0000-0000-000000000000',
      type: 'controller',
      triggeredAt: '2000-01-01T00:00:00.000Z',
      disabled: false,
      trigger: {
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        controllerType: 'shortcutController',
        clickPattern: 'longPress',
        buttonIndex: 0,
        deviceId: '00000000-0000-0000-0000-000000000000',
      },
    },
  ],
  actions: [
    {
      id: '00000000-0000-0000-0000-000000000000',
      type: 'device',
      deviceId: '00000000-0000-0000-0000-000000000000',
      attributes: {
        volume: 20,
        playback: 'playbackIdle',
        playbackAudio: {
          playItem: {
            title: '',
          },
        },
      },
    },
    {
      id: '00000000-0000-0000-0000-000000000000',
      type: 'device',
      deviceId: '00000000-0000-0000-0000-000000000000',
      attributes: {
        isOn: false,
      },
    },
    {
      id: '00000000-0000-0000-0000-000000000000',
      type: 'deviceSet',
      attributes: {
        isOn: false,
      },
    },
  ],
  commands: [],
  createdAt: '2000-01-01T00:00:00.000Z',
  lastCompleted: '2000-01-01T00:00:00.000Z',
  lastTriggered: '2000-01-01T00:00:00.000Z',
  undoAllowedDuration: 30,
}
