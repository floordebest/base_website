export interface Activity {
  name: string
  description: string
  image: string
}

export const activities: Array<Activity> = [
  {
    name: 'privateClasses',
    description: 'privateClassesDescription',
    image: '/activities/boxing.png'
  },
  {
    name: 'bjj',
    description: 'bjjDescription',
    image: '/floris.jpg'
  },
  {
    name: 'kidsClasses',
    description: 'kidsClassesDescription',
    image: '/activities/kidsclasses.png'
  },
  {
    name: 'mma',
    description: 'mmaDescription',
    image: '/activities/grappling.jpg'
  },
  {
    name: 'muayThai',
    description: 'muayThaiDescription',
    image: '/activities/kickboxing.jpg'
  },
  {
    name: 'fitBoxing',
    description: 'fitBoxingDescription',
    image: '/activities/fitboxing.jpg'
  }
]
