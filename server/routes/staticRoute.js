const getStaticFile = {
  handler: {
    directory: {
      path: 'server/static',
      index: false,
      listing: false,
      showHidden: false,
    },
  },
};

export default getStaticFile;
