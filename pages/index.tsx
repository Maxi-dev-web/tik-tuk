import type { NextPage } from 'next'
import { Typography } from '../components';
import { withLayout } from '../layout/Layout';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Typography tag="p">
        adwawdawd
      </Typography>
    </div>
  )
}

export default withLayout(Home);
