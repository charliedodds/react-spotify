export default interface ITrack {
  album: {
    images: {
      url: string
    }[]
  }
  artists: {
    name: string
  }[]
  id: string
  name: string
}
