import React from "react";
import Image from "next/image";

import {
  Hashtag,
  iCustomError,
  iVideo,
} from "../../interfaces/HomePage.interface";
import { iUser, iUserFeedSignal } from "../../interfaces/User.interface";

import { withLayout } from "../../layout/Layout";
import { Skeleton, Typography } from "../../components";

import { VideosAPI } from "../../api/videos";

import iconVerified from "../../assets/images/homePage/verify.png";

import homeStyles from "../../styles/Home.module.scss";
import s from "../../styles/User.module.scss";

function User({ userFeed, userInfo, error }: iUserProps): JSX.Element {
  return (
    <section className={s.container}>
      <div className={s.userContainer}>
        {typeof window !== "undefined" && userInfo?.user && userInfo?.stats && (
          <>
            <div className={s.info}>
              <div className={s.avatarWrapper}>
                <Image
                  className={s.avatar}
                  src={userInfo.user.avatarLarger}
                  layout="fixed"
                  alt={userInfo.user.uniqueId}
                  width={100}
                  height={100}
                />
                <Typography tag="span" className={s.userName}>
                  {userInfo.user.nickname}
                  {userInfo.user.verified ? (
                    <Image
                      className={s.verificationIcon}
                      src={iconVerified}
                      alt="user is verified"
                      width={32}
                      height={32}
                    />
                  ) : null}
                </Typography>
              </div>
              <Typography tag="p" className={s.signature}>
                {userInfo.user.signature}
              </Typography>
            </div>
            <div className={s.statsWrapper}>
              <Typography tag="p" className={s.stats}>
                Followers: {userInfo.stats.followerCount}
              </Typography>
              <Typography tag="p" className={s.stats}>
                Following: {userInfo.stats.followingCount}
              </Typography>
              <Typography tag="p" className={s.stats}>
                Hearts: {userInfo.stats.heartCount}
              </Typography>
              <Typography tag="p" className={s.stats}>
                Videos: {userInfo.stats.videoCount}
              </Typography>
            </div>
          </>
        )}
      </div>

      {typeof window !== "undefined" &&
        Array.isArray(userFeed) &&
        Boolean(userFeed?.length) && (
          <div className={homeStyles.firstSection}>
            {userFeed.map((video: iVideo) => {
              return (
                <div key={video.id} className={homeStyles.cards}>
                  <div className={homeStyles.videoCard}>
                    <video
                      className={homeStyles.videoInner}
                      width={video.videoMeta.width}
                      height={video.videoMeta.height}
                      controls
                      poster={video.covers.default}
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Тег video не поддерживается вашим браузером.
                    </video>

                    <Typography tag="p" className={homeStyles.videoText}>
                      {video.text}
                    </Typography>
                    {Boolean(video?.hashtags?.length) && (
                      <div className={homeStyles.hashTags}>
                        {video.hashtags.map((tag: Hashtag) => {
                          return (
                            <Typography
                              key={tag.id}
                              tag="span"
                              data-id={tag.id}
                              className={homeStyles.hashTag}
                            >
                              #{tag.name}
                            </Typography>
                          );
                        })}
                      </div>
                    )}

                    <Typography tag="p" className={homeStyles.comments}>
                      Total Views: {video.playCount}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      {typeof window !== "undefined" &&
        Array.isArray(userFeed) &&
        !userFeed?.length && (
          <>
            {[1, 2, 3, 4].map((skelet) => (
              <Skeleton key={skelet} />
            ))}
          </>
        )}
      {typeof window !== "undefined" && !Array.isArray(userFeed) && (
        <Typography tag="p" className={s.error}>
          Some error occurred with code: {userFeed?.code}. Please try again and
          reaload a page!
        </Typography>
      )}
      {typeof window !== "undefined" && error?.message?.length && (
        <Typography tag="p" className={s.error}>
          Some error occurred: {error.message}. Please try again and reaload a
          page!
        </Typography>
      )}
    </section>
  );
}

export default withLayout(User);

export async function getStaticPaths() {
  const limit = 100;
  try {
    const data = await VideosAPI.requestVideoData(limit);
    const paths = data.map((video) => ({
      params: { username: video.authorMeta.name },
    }));

    return { paths, fallback: true };
  } catch (e) {
    console.log(e);
  }
}

export const getStaticProps = async ({ params }) => {
  const username = params.username;
  const limit = process.env.PER_PAGE_LIMIT || 30;

  try {
    const userFeed = await VideosAPI.requestVideoData(limit);
    const userInfo = await VideosAPI.requestUserInfo(username);

    return {
      props: { userFeed, userInfo },
      revalidate: 1,
    };
  } catch (e) {
    const error = {
      message: `Some error ocuured ${e}`,
    };
    return {
      props: { error },
      revalidate: 1,
    };
  }
};

export interface iUserProps extends Record<string, unknown> {
  error?: iCustomError;
  userFeed?: iVideo[] | iUserFeedSignal;
  userInfo?: iUser;
}
