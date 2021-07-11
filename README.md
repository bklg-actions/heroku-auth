# heroku-auth

Adds your Heroku credentials to ~/.netrc for other jobs in your workflow.

## Usage

Use the action in your workflow with your API key:

```yaml
name: workflow-name
on:
  pull_request:
    types: [opened, synchronize]
jobs:
  job_name:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: bklg-actions/heroku-auth@v1
        with:
          api_key: ${{secrets.HEROKU_API_KEY}}
          email: ${{secrets.HEROKU_EMAIL}}
```

See [action.yml](/bklg-actions/heroku-auth/blob/master/action.yml) for a full list of inputs and outputs.

## Contributing

Issue reports and pull requests are welcome on GitHub at https://github.com/bklg-actions/heroku-auth.

## License

This work is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
