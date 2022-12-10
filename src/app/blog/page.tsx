import {getBlogs } from '@/api'
import { ArticleList } from '@/components/blog/ArticleList'
import { IArticle } from '@/types/data'
import { Title, Description } from '@/components/typography'

export default async function BlogPage() {
  const blogsIds:string[] = JSON.parse(process.env.NOTION_BLOGS_IDS || '[]')
  const promiseArr = blogsIds.map((id:string) => getBlogs(id))
  const results = await Promise.allSettled(promiseArr)
  const articles = results.map((result:PromiseSettledResult<IArticle[]>) => result.status === 'fulfilled' ? result.value : []).flat()
   // blogs 即为所有博客数据组成的数组
  return (
    <>
     <header>
        <Title>Blog</Title>
      <Description
      >
        This is where I write about programming, tech, life, and everything in
        between.
      </Description>
     </header>
     <div>
       <ArticleList articles={articles} />
       {/* { JSON.stringify(articles)} */}
        {/* <Image src={result.cover?.external?.url} width={300} height={200} alt="Picture of the author" /> */}
     </div>
  </>
  )
}