import type { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import cn from 'classnames';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { Title, Typography } from '../components';

import imgWhiteCard from '../assets/images/homePage/cardImg.png';
import imgRevC1 from '../assets/images/homePage/reviewC1.png';
import imgRevC2 from '../assets/images/homePage/reviewC2.png';
import imgRevC3 from '../assets/images/homePage/reviewC3.png';
import imgCoder1 from '../assets/images/homePage/coder1.png';
import imgCoder2 from '../assets/images/homePage/coder2.png';
import IconStarFilled from '../assets/images/homePage/ratingStarFilled.svg';
import IconStarEmpty from '../assets/images/homePage/ratingStarEmpty.svg';
import IconArrowDown from '../assets/images/homePage/arrowDown.svg';
import IconArrowUp from '../assets/images/homePage/arrowUp.svg';

import s from '../styles/Home.module.css'
import React, { FunctionComponent, useEffect } from 'react';
import { ICurrencyData } from '../interfaces/HomePage.interface';

const Home = ({ data }: HomeProps): JSX.Element => {
  // useEffect(() => {
  //   console.log('data: ', data);
  // }, [data])

  return (
    <div className={s.container}>
      <Title tag="h1" className={s.title}>
        Do The Task <br />And Have Fun
      </Title>
      <section className={s.firstSection}>
        <div className={s.fsLeft}>
          <div className={s.whiteCardWrapper}>
            <div className={s.cardTop}>
              <Image src={imgWhiteCard} alt="Andy / Head Of UX Design" layout='fixed' width={110} height={110} />
              <Typography tag="p" className={s.cardPersonInfo}>Andy{' '}<br />
                <Typography tag="span">Head Of UX Design</Typography>
              </Typography>

            </div>
            <div className={s.cardBottom}>
              <Typography tag="p" className={s.cardQuote}>“The Style Of This Test Task
                Matches The Style That You Will
                Be Making Real Job In.”</Typography>
            </div>
          </div>
        </div>
        <div className={s.fsRight}>
          <Title tag="h2" className={s.fsRightTitle}>
            Be Persistent & Attentive To Details
          </Title>
          <div className={s.currencyWrapperCard}>
            <Title tag="h3" className={s.currencyWrapperTitle}>
              Fonts & Colors
              Matter
            </Title>
            <div className={s.currencyCard}>
              <Typography tag="p" className={s.currencyCardTitle}>
                Mobile Friendly
              </Typography>
              <Typography tag="p" className={s.currencyCardPrice}>
                ₽{Boolean(data) && data?.rates && (data.rates.RUB)}<Typography tag="span" className={cn(s.currencyCardVector, s.down)}>-3.2% <IconArrowDown /></Typography>
              </Typography>
              <Typography tag="p" className={s.currencyCardDescription}>
                Don’t Forget About Small Devices
              </Typography>
            </div>
            <div className={cn(s.currencyCard, s.offseted)}>
              <Typography tag="p" className={s.currencyCardTitle}>
                Responsive Design
              </Typography>
              <Typography tag="p" className={s.currencyCardPrice}>
                €{Boolean(data) && data?.rates && (data.rates.EUR)}<Typography tag="span" className={cn(s.currencyCardVector, s.up)}>+8.5% <IconArrowUp /></Typography>
              </Typography>
              <Typography tag="p" className={s.currencyCardDescription}>
                You’ll Learn A Lot From This Task
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section className={s.secondSection}>
        <Title tag="h2" className={s.secondSectionTitle}>
          What Pros Are Saying...
        </Title>
        <div className={s.testimonialsWrapper}>
          <div className={s.testimonialCard}>
            <Image src={imgRevC1} alt="Nia" layout="fixed" width={76} height={76} />
            <Typography tag="span" className={s.testimonialName}>
              Nia
            </Typography>
            <Typography tag="p" className={s.testimonialMessage}>
              “This task can be perfect for students from FIT”
            </Typography>
          </div>
          <div className={s.testimonialCard}>
            <Image src={imgRevC2} alt="Nia" layout="fixed" width={76} height={76} />
            <Typography tag="span" className={s.testimonialName}>
              Abigale
            </Typography>
            <Typography tag="p" className={s.testimonialMessage}>
              “I am so sexy, that men are doing  test tasks for me for free.”
            </Typography>
          </div>
          <div className={s.testimonialCard}>
            <Image src={imgRevC3} alt="Nia" layout="fixed" width={76} height={76} />
            <Typography tag="span" className={s.testimonialName}>
              Fedya
            </Typography>
            <Typography tag="p" className={s.testimonialMessage}>
              “Kuku Epta. EZ Task.”
            </Typography>
          </div>
        </div>
      </section>
      <section className={s.thirdSection}>
        <Title tag="h2" className={s.thirdSectionTitle}>
          What Other Coders Are Saying...
        </Title>
        <div className={s.reviewsWrapper}>
          <div className={s.reviewCard}>
            <Image src={imgCoder1} alt="Nia" layout="fixed" width={50} height={50} />
            <div className={s.reviewCardBody}>
              <div className={s.reviewCardBodyTop}>
                <Typography tag="span" className={s.reviewCardTitle}>
                  Wow, this test task is absolutely amazing! Loved it!
                </Typography>
                <Typography tag="span" className={s.reviewCardTime}>
                  05:20
                </Typography>
              </div>
              <div className={s.reviewCardBodyBottom}>
                <Typography tag="span" className={s.reviewCardName}>
                  John Kennedy
                </Typography>
                <div className={s.rating}>
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                </div>
              </div>
            </div>
          </div>
          <div className={s.reviewCard}>
            <Image src={imgCoder2} alt="Nia" layout="fixed" width={50} height={50} />
            <div className={s.reviewCardBody}>
              <div className={s.reviewCardBodyTop}>
                <Typography tag="span" className={s.reviewCardTitle}>
                  Holy cow, developers rock, but I missed the 5 stars button.
                </Typography>
                <Typography tag="span" className={s.reviewCardTime}>
                  14:30
                </Typography>
              </div>
              <div className={s.reviewCardBodyBottom}>
                <Typography tag="span" className={s.reviewCardName}>
                  Vasiliy Igorsky
                </Typography>
                <div className={s.rating}>
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarEmpty />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}


export const getStaticProps: GetStaticProps<HomeProps, ParsedUrlQuery> = async () => {
  const appId = process.env.NEXT_PUBLIC_API_KEY;
  // const startTime = '2021-10-01T18:16:52.966Z'
  const { data } = await axios.get<ICurrencyData>(`https://openexchangerates.org/api/historical/2021-10-04.json?app_id=${appId}&base=USD&show_alternative=false&prettyprint=false`)
  return {
    props: { data }
  }
}

export interface HomeProps extends Record<string, unknown> {
  data: ICurrencyData
}

export default withLayout(Home);
