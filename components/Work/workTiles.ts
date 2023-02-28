export type WorkTile = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
}

export const workTiles: WorkTile[] = [
  {
    description: `I built`,
    title: `Oqupie Customer Portal`,
    image: {
      src: '/static/images/oqupie-portal-main.png',
      width: 600,
      height: 770,
    },
  },
]
