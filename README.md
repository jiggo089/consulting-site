# AI-консалтинг — лендинг

Статический сайт на чистом HTML/CSS/JS. Без сборщиков, без зависимостей.

**Live:** https://consulting.ai-service-hub.ru/

## Структура

```
site/
├── index.html      # Единственная страница
├── style.css       # Все стили
├── app.js          # Sticky nav + scroll reveal
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Локальная разработка

```bash
cd site
python3 -m http.server 8000
# → http://localhost:8000
```

## Деплой

Сайт обслуживается nginx с SSL от Let's Encrypt на VPS (`vps1`), в `/var/www/consulting`. Nginx-конфиг — `deploy/nginx.conf`, pre-SSL bootstrap для первого certbot-запроса — `deploy/nginx-pre-ssl.conf`.

```bash
# Обновить файлы на проде (rsync на VPS не установлен — используем tar pipe):
cd site
tar -czf - --exclude='.git' --exclude='deploy' --exclude='README.md' --exclude='.gitignore' . \
  | ssh vps1 'tar -xzf - -C /var/www/consulting/ && chown -R www-data:www-data /var/www/consulting/'
```

SSL автообновляется через системный certbot.timer.

## Стек на сайте

Кейсы и стек, упомянутые на лендинге: OpenAI / Anthropic Claude / Whisper / pyannote / FastAPI / Spring Boot / PostgreSQL + pgvector / Yandex Cloud.

## Лицензия

Закрытый исходный код. Использование макета и текстов запрещено.
