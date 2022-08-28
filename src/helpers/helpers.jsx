export const getFormatDate = (targetBlock, date) => {
  const dateOptions =
    targetBlock === 'contacts'
      ? {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }
      : {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        };

  return new Date(date).toLocaleString('en-US', dateOptions);
};
