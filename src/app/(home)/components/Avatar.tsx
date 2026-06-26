import React from 'react'
import { Link, Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
    <Link href='https://x.com/intent/follow?screen_name=rjrishav76' target='_blank'>
      <Picture
        src='https://pbs.twimg.com/profile_images/1946798485350629376/oulA81oX_400x400.jpg'
        fallback="A"
        size='6'
        radius='full'
      />
    </Link>
  )
}

export default Avatar
