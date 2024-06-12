export type PostType = {
  id: number
  title: string
  content: string
  poster_url: string | null
  author_id: string
  created_at: Date
}

export type ProfileType = {
  id: string
  full_name: string
  avatar_url: string | null
  username: string | null
}

export type PostWithProfile = PostType & {
  profiles: ProfileType | ProfileType[]
}

export type ProfileWithPosts = ProfileType & {
  posts: PostType[]
}
