# Telegram Bot (Migration Appointments)

## 1) Install

```bash
pip install -r requirements.txt
```

## 2) Configure env

Create `.env` next to `bot.py`:

```bash
cp .env.example .env
```

Fill values:

- `BOT_TOKEN` - token from `@BotFather`
- `ADMIN_ID` - your Telegram user id
- `TELEGRAM_PROXY` (optional) - required if your network blocks Telegram API

Note: on Windows, if `TELEGRAM_PROXY` is empty, the bot will try to use your system proxy from
`Internet Settings` automatically.

Proxy examples:

- `TELEGRAM_PROXY=socks5://127.0.0.1:1080`
- `TELEGRAM_PROXY=http://127.0.0.1:8080`

## 3) Run

```bash
python bot.py
```

## Common startup error

If you see:

- `Cannot connect to host api.telegram.org:443`
- `WinError 121`

then your machine cannot reach Telegram API directly. Use `TELEGRAM_PROXY` in `.env` or run the bot on a host/network with open access to Telegram.

## Security notes

- Never commit `.env`
- Do not keep real tokens in source files
- If token was exposed, revoke and regenerate it in `@BotFather`
