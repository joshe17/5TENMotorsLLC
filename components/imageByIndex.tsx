export const images: string[] = [
    './images/wagonFull.jpg',
    './images/wagonEngine.jpg',
    '/images/hakoFull.jpg',
    '/images/hakoEngine.jpg',
    '/images/hakoInterior.jpg',
    '/images/bluebirdFull.jpg',
    '/images/bluebirdBack.jpg',
    '/images/rotaryEngine.jpg',
    '/images/rotaryEngine2.jpg',
    '/images/rotaryInterior.jpg',
    '/images/threeCars.jpg',
]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
