export default params =>
  `?${Object.entries(params)
    .map(it => {
      if (Array.isArray(it[1]))
        return it[1].map(i => `${it[0]}=${i}`).join('&');
      return it.join('=');
    })
    .join('&')}`;
