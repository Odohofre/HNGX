import React, {Suspense} from 'react'
import ImageList from '../components/ImageList'
import Skeleton from '../components/Skeleton'

export default function Gallery() {
  return (
    <main>
      <h1>Welcome</h1>
      <h3>Random images from Pixabay</h3>
      <Suspense fallback={<Skeleton />}>
        <ImageList />
      </Suspense>
    </main>
  )
}
