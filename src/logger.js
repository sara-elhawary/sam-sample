exports.handler = async (event) => {
  const eventLog = JSON.stringify(event);
  console.log(eventLog);
  return {
    status_code: 200,
    body: eventLog,
  };
};
