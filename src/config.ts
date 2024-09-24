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
    image: '/activities/bjj.png'
  },
  {
    name: 'mma',
    description: 'mmaDescription',
    image: '/activities/grappling.png'
  },
  {
    name: 'muayThai',
    description: 'muayThaiDescription',
    image: '/activities/kickboxing.png'
  },
  {
    name: 'boxing',
    description: 'boxingDescription',
    image: '/activities/boxingClass.png'
  },
  {
    name: 'fitBoxing',
    description: 'fitBoxingDescription',
    image: '/activities/fitboxing.jpg'
  },
  {
    name: 'kidsClasses',
    description: 'kidsClassesDescription',
    image: '/activities/kidsclasses.png'
  }
]
