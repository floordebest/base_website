export interface Activity {
  name: string
  description: string
  image: string
}

export const activities: Array<Activity> = [
  {
    name: 'Private Classes',
    description:
      'Whether it is to learn Gracie Jiu-Jitsu, MMA, Self-Defence, get fit, work on your fighting skills and technique, build self-esteem and feel more confident or to prepare for a professional career, we adapt our private classes to you.',
    image: '/activities/boxing.png'
  },
  {
    name: 'Brazilian Jiu-Jitsu',
    description:
      'Jiu-Jitsu will make you healthy, self-confident, strong, flexible, mentally healthy and... simply happy. You will release endorphins as never, relax your mind and evacuate all the daily pressure. We minimize the injuries with a friendly and caring gym culture and a very professional training.',
    image: '/activities/bjj.png'
  },
  {
    name: 'MMA / Grappling',
    description:
      "Jiu-Jitsu and Wrestling can be practiced either with a gi or without. That's why we offer grappling classes without the gi (Nogi). MMA is a very comprehensive sport that encompasses all aspects of fighting: striking, clinching, takedowns, and ground fighting. Each of these aspects is a science, an Art: Boxing, Muay Thai, Judo, Wrestling, Jiu-Jitsu, Sambo..",
    image: '/activities/grappling.png'
  },
  {
    name: 'Muay Tai / Kickboxing',
    description:
      "Our Muay Thai and Kickboxing program is designed for all skill levels. Whether you're a beginner looking to get started or an experienced fighter aiming to enhance your techniques, our program offers something for everyone",
    image: '/activities/kickboxing.png'
  },
  {
    name: 'Fitboxing',
    description:
      'FitBoxing is a high-energy fusion of boxing techniques, cardio workouts, and strength training. This fitness program combines the best of traditional boxing with the latest in exercise science to deliver a full-body workout that is both effective and fun. Whether you’re a seasoned athlete or just starting your fitness journey, FitBoxing at The Base Javea offers something for everyone.',
    image: '/activities/fitboxing.jpg'
  },
  {
    name: 'Kids Classes',
    description:
      'BJJ and Kickboxing emphasizes the importance of physical activity and can instil positive habits in your child from an early age. At the Base, your child will be engaged in a physically and intellectually stimulating activity. ',
    image: '/activities/kidsclasses.png'
  }
]
