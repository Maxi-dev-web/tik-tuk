module.exports = {
  images: {
    domains: [
      "p16-sign.tiktokcdn-us.com",
      "p77-sign-va.tiktokcdn.com",
      "p16-sign-sg.tiktokcdn.com",
      "p16-sign-va.tiktokcdn.com",
      "p77-sign-va-lite.tiktokcdn.com",
      "p16-sign-sg.tiktokcdn.com",
      "p77-sign-sg-lite.tiktokcdn.com",
      "p19-sign.tiktokcdn-us.com",
    ],
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};