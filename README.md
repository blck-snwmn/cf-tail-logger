# cf-tail-logger

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