# cf-tail-logger

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
### Tail worker(note: Tail Workers is open beta)
Add the following to your wrangler.toml

```toml
tail_consumers = [{service = "cf-tail-logger"}]
```