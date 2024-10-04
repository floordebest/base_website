export interface Activity {
  name: string
  description: string
  image: string
}

export const activities: Array<Activity> = [
  {
    name: 'bjj',
    description: 'bjjDescription',
    image: '/activities/bjj.jpg'
  },
  {
    name: 'kidsClasses',
    description: 'kidsClassesDescription',
    image: '/activities/kidsclasses.png'
  },
  {
    name: 'mma',
    description: 'mmaDescription',
    image: '/activities/grappling.png'
  },
  {
    name: 'muayThai',
    description: 'muayThaiDescription',
    image: '/activities/kickboxing.jpg'
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
    name: 'privateClasses',
    description: 'privateClassesDescription',
    image: '/activities/boxing.png'
  }
]
