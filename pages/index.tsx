import React, { useEffect, useState } from 'react';
import { withLayout } from '../layout/Layout';
import type { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import axios from 'axios';
import { Title, Typography } from '../components';
import { Hashtag, iVideo } from '../interfaces/HomePage.interface';

// import imgWhiteCard from '../assets/images/homePage/cardImg.png';
// import imgRevC1 from '../assets/images/homePage/reviewC1.png';
// import imgRevC2 from '../assets/images/homePage/reviewC2.png';
// import imgRevC3 from '../assets/images/homePage/reviewC3.png';
// import imgCoder1 from '../assets/images/homePage/coder1.png';
// import imgCoder2 from '../assets/images/homePage/coder2.png';
// import IconStarFilled from '../assets/images/homePage/ratingStarFilled.svg';
// import IconStarEmpty from '../assets/images/homePage/ratingStarEmpty.svg';
// import IconArrowDown from '../assets/images/homePage/arrowDown.svg';
// import IconArrowUp from '../assets/images/homePage/arrowUp.svg';

import s from '../styles/Home.module.scss';

const options = {
  method: 'GET',
  url: 'https://tiktok33.p.rapidapi.com/trending/feed',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': '4680d87a36mshb66d274f2092123p16bc5ajsn49af35a157db'
  }
};

const Home = ({ data }: HomeProps): JSX.Element => {
  console.log('data: ', data);
  const [videoData, setVideoData] = useState<iVideo[]>([])


  useEffect(() => {
    (async () => {
      // const { data } = await axios.request(options);
      // setVideoData(data);
    })()

  }, [])


  useEffect(() => {
    // console.log('videoData: ', videoData);
  }, [videoData])

  return (
    <div className={s.container}>
      <Head>
        <title>Test Task</title>
        <meta name="description" content="Ohh, shit! Here we go again!" />
        <meta property="og:title" content="Test Task" />
        <meta property="og:description" content="Just click and relax!" />
        <meta property="og:type" content="article" />
      </Head>

      <section className={s.firstSection}>
        <Title tag="h1" className={s.firstSectionTitle}>
          What Pros Are Saying...
        </Title>

        {typeof window !== 'undefined' && data?.length
          ? data.map(video => {
            return (
              <div className={s.cards}>
                <div className={s.videoCard}>
                  <div className={s.video}>
                    <video width={video.videoMeta.width} height={video.videoMeta.height} controls poster={video.covers.default}>
                      <source src={video.videoUrl} type='video/mp4' />
                      Тег video не поддерживается вашим браузером.
                    </video>
                  </div>
                  
                  <Link href="/">
                    <a className={s.creator}>
                      <Image src={video.authorMeta.avatar} alt={video.authorMeta.nickName} layout="fixed" width={76} height={76} />
                      {video.authorMeta.nickName}
                    </a>
                  </Link>

                  <Typography tag="p" className={s.videoText}>
                    {video.text}
                  </Typography>
                  {video?.hashtags?.length &&
                    <div className={s.hashTags}>
                      {video.hashtags.map((tag: Hashtag) => {
                        return (
                          <Typography tag="span" data-id={tag.id} className={s.hashTag}>
                            #{tag.name}
                          </Typography>

                        )
                      })}
                    </div>}

                  <Typography tag="p" className={s.comments}>
                    comments
                  </Typography>
                  <Typography tag="p" className={s.likes}>
                    likes
                  </Typography>
                </div>

              </div>
            );
          })
          : 'Loading...'
        }

      </section>

    </div>
  )
}


export const getStaticProps: GetStaticProps<HomeProps, ParsedUrlQuery> = async () => {

  // const startTime = '2021-10-01T18:16:52.966Z'
  // return {
  //   props: { data: null }
  // }
  try {
    const { data } = await axios.request({
      method: 'GET',
      url: 'https://tiktok33.p.rapidapi.com/trending/feed',
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': '4680d87a36mshb66d274f2092123p16bc5ajsn49af35a157db'
      }
    });
    return {
      props: { data }
    }
  } catch (e) {
    return {
      props: { data: `Some error ocuured ${e}` }
    }
  }

}

export interface HomeProps extends Record<string, unknown> {
  data: iVideo[]
}

export default withLayout(Home);
