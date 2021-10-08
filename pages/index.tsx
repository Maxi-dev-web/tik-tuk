import type { NextPage } from 'next'
import Image from 'next/image';
import cn from 'classnames';
import { withLayout } from '../layout/Layout';
import { Title, Typography } from '../components';

import imgWhiteCard from '../assets/images/homePage/cardImg.png';
import IconArrowDown from '../assets/images/homePage/arrowDown.svg';
import IconArrowUp from '../assets/images/homePage/arrowUp.svg';
import s from '../styles/Home.module.css'

const Home: NextPage = () => {
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
                $12380<Typography tag="span" className={cn(s.currencyCardVector, s.down)}>-3.2% <IconArrowDown /></Typography>
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
                $19840<Typography tag="span" className={cn(s.currencyCardVector, s.up)}>+8.5% <IconArrowUp /></Typography>
              </Typography>
              <Typography tag="p" className={s.currencyCardDescription}>
                You’ll Learn A Lot From This Task
              </Typography>
            </div>
          </div>
        </div>

      </section>
      {/* <Typography tag="p">
        adwawdawd
      </Typography> */}
    </div>
  )
}

export default withLayout(Home);
