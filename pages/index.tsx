import React, { useEffect, useState, useRef, useCallback } from 'react';
import type { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

import { withLayout } from '../layout/Layout';
import { Skeleton, Title, Typography } from '../components';
import { Hashtag, iCustomError, iVideo } from '../interfaces/HomePage.interface';

import s from '../styles/Home.module.scss';

const options = {
  method: 'GET',
  url: 'https://tiktok33.p.rapidapi.com/trending/feed',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': '4680d87a36mshb66d274f2092123p16bc5ajsn49af35a157db'
  }
};

const Home = ({ data = [], error }: HomeProps): JSX.Element => {
  const router = useRouter();
  const elementScrollToRef = useRef<HTMLDivElement>();
  const [videoData, setVideoData] = useState<iVideo[]>(data)
  const [errorMessage, setErrorMessage] = useState<iCustomError | undefined | null>(error)
  const [currentPage, setSetCurrentPage] = useState<string | string[]>('1')
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const limitPerPage: number | string = process.env.NEXT_PUBLIC_POSTS_PER_PAGE_LIMIT || 30;
  const page = useCallback(() => router.query?.page, [router.query])
  let limit: number | null = null;

  if (Array.isArray(currentPage)) {
    limit = Number.parseInt(currentPage[0]) * (typeof limitPerPage === 'string' ? Number.parseInt(limitPerPage) : limitPerPage);
  } else {
    limit = Number.parseInt(currentPage) * (typeof limitPerPage === 'string' ? Number.parseInt(limitPerPage) : limitPerPage);
  }

  const handlePaginate = (page: number) => {
    router.push(`?page=${page}`)
  }

  const paginatePosts = async (limit: number) => {
    setIsFetching(true)
    setVideoData([])
    try {
      const { data } = await axios.request<iVideo[]>({
        method: 'GET',
        url: `https://tiktok33.p.rapidapi.com/trending/feed?limit=${limit}`,
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
        }
      });
      setVideoData(data)
      setErrorMessage(null)
    } catch (e) {
      setErrorMessage({ message: `Some error occurred while pagingating with code ${e}` })
    } finally {
      setIsFetching(false)
    }

  }

  useEffect(() => {
    paginatePosts(limit);
  }, [currentPage])

  useEffect(() => {
    setSetCurrentPage(page ?? '1')
  }, [page])

  useEffect(() => {
    if (elementScrollToRef?.current) {
      elementScrollToRef.current.scrollIntoView()
    }
  }, [isFetching])


  return (
    <section className={s.container}>
      <Head>
        <title>Test Task</title>
        <meta name="description" content="TikTuk :) videos" />
        <meta property="og:title" content="Test Task" />
        <meta property="og:description" content="Just click and relax!" />
        <meta property="og:type" content="article" />
      </Head>

      <div className={s.firstSection}>
        <Title tag="h1" className={s.firstSectionTitle}>
          TikTok Feeds
        </Title>

        {typeof window !== 'undefined' && Array.isArray(videoData) && videoData.map(video => {
          return (
            <div key={video.id} className={s.cards}>
              <div className={s.videoCard}>
                <video className={s.videoInner} width={video.videoMeta.width} height={video.videoMeta.height} controls poster={video.covers.default}>
                  <source src={video.videoUrl} type='video/mp4' />
                  Тег video не поддерживается вашим браузером.
                </video>

                <Link href={`/user/${video.authorMeta.name}`}>
                  <a className={s.creator}>
                    <Image className={s.creatorAvatar} src={video.authorMeta.avatar} alt={video.authorMeta.nickName} layout="fixed" width={76} height={76} />
                    <Typography tag="span" className={s.creatorName}>
                      {video.authorMeta.nickName}
                    </Typography>

                  </a>
                </Link>

                <Typography tag="p" className={s.videoText}>
                  {video.text}
                </Typography>
                {Boolean(video?.hashtags?.length) &&
                  <div className={s.hashTags}>
                    {video.hashtags.map((tag: Hashtag) => {
                      return (
                        <Typography key={tag.id} tag="span" data-id={tag.id} className={s.hashTag}>
                          #{tag.name}
                        </Typography>
                      )
                    })}
                  </div>}

                <Typography tag="p" className={s.comments}>
                  Comments: {video.commentCount}
                </Typography>
                <Typography tag="p" className={s.likes}>
                  Likes: {video.diggCount}
                </Typography>
              </div>

            </div>
          );
        })}

        {typeof window !== 'undefined' && errorMessage?.message?.length && (
          <div className={s.error}><Typography tag="p">{errorMessage.message}, please wait some minutes and reload a page</Typography></div>
        )}
        {typeof window !== 'undefined' && isFetching && (
          <>
            <div ref={elementScrollToRef} />
            {[1, 2, 3, 4].map((skeletm, index) => <Skeleton key={index} />)}
          </>
        )}
      </div>
      <div className={s.paginations}>
        <button className={s.pager} onClick={() => handlePaginate(1)}>
          1
        </button>
        <button className={s.pager} onClick={() => handlePaginate(2)}>
          2
        </button>
        <button className={s.pager} onClick={() => handlePaginate(3)}>
          3
        </button>
        <button className={s.pager} onClick={() => handlePaginate(4)}>
          4
        </button>
      </div>
    </section>
  )
}


export const getStaticProps: GetStaticProps<HomeProps, ParsedUrlQuery> = async ({ params }) => {
  const limit = process.env.NEXT_PUBLIC_POSTS_PER_PAGE_LIMIT || 30

  try {
    const { data } = await axios.request<iVideo[]>({
      method: 'GET',
      url: `https://tiktok33.p.rapidapi.com/trending/feed?limit=${limit}`,
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
      }
    });
    return {
      props: { data }
    }
  } catch (e) {
    const error = {
      message: `Some error ocuured ${e}`
    }
    return {
      props: { error }
    }
  }

}

export interface HomeProps extends Record<string, unknown> {
  data?: iVideo[];
  error?: iCustomError;
}

export default withLayout(Home);
