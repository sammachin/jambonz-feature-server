const appsMap = {
  queue: {
    // Dummy hook to follow later feature server logic.
    call_hook: {
      url: 'https://jambonz.org',
      method: 'GET'
    },
    account_sid: '',
    app_json: [{
      verb: 'dequeue',
      name: '',
      timeout: 5
    }]
  },
  user: {
    // Dummy hook to follow later feature server logic.
    call_hook: {
      url: 'https://jambonz.org',
      method: 'GET'
    },
    account_sid: '',
    app_json: [{
      verb: 'dial',

      callerId: '',
      answerOnBridge: true,
      dialMusic: 'https://s3.sammachin.com/ukringbacktone.mp3',
      target: [
        {
          type: 'user',
          name: ''
        }
      ]
    }]
  }
};

const createJambonzApp = (type, {account_sid, name, caller_id}) => {
  const app = {...appsMap[type]};
  app.account_sid = account_sid;
  switch (type) {
    case 'queue':
      app.app_json[0].name = name;
      break;
    case 'user':
      app.app_json[0].callerId = caller_id;
      app.app_json[0].target[0].name = name;
      break;
  }
  app.app_json = JSON.stringify(app.app_json);
  return app;
};

module.exports = {
  createJambonzApp
};
