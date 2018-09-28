const sendOption = {
  timeout: 2500,
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
  maxContentLength: 2000,
  // validateStatus: function (status) {
  //   return status >= 200 && status < 300; // default
  // },
  maxRedirects: 0,

};

const swaggerOption = Object.assign({}, sendOption, {
  baseURL: '/mock',
});

const serverMockOption = Object.assign({}, sendOption, {
  baseURL: 'http://localhost:3000/mock',
});

export default sendOption;

export {
  swaggerOption,
  serverMockOption,
};
