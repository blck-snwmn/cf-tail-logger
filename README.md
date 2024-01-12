# cf-tail-logger
[![Deploy](https://github.com/blck-snwmn/cf-tail-logger/actions/workflows/deploy.yaml/badge.svg)](https://github.com/blck-snwmn/cf-tail-logger/actions/workflows/deploy.yaml)
[![CodeQL](https://github.com/blck-snwmn/cf-tail-logger/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/blck-snwmn/cf-tail-logger/actions/workflows/github-code-scanning/codeql)

## Setting
Create R2 bucket for logs

```bash
wrangler r2 bucket create logs
```

## Deploy
```bash
wrangler deploy
```

## Use
Add the following to your wrangler.toml  
(note: Tail Workers is open beta)

```toml
tail_consumers = [{service = "cf-tail-logger"}]
```
