const core = require('@actions/core');
const child_process = require("child_process");

const createNetRcFile = ({email, apiKey}) => {
  return `cat > ~/.netrc <<EOF
machine api.heroku.com
  login ${email}
  password ${apiKey}
machine git.heroku.com
  login ${email}
  password ${apiKey}
EOF`;
}

async function run() {
  try {
    let config = {
      apiKey: core.getInput('api_key'),
      email: core.getInput('email')
    };

    child_process.execSync(createNetRcFile(config));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
