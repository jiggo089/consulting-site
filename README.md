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

Сайт деплоится rsync'ом на VPS в `/var/www/consulting`, обслуживается nginx с SSL от Let's Encrypt. Nginx-конфиг лежит в `deploy/nginx.conf`.

```bash
rsync -avz --delete site/ vps1:/var/www/consulting/
```

## Стек на сайте

Кейсы и стек, упомянутые на лендинге: OpenAI / Anthropic Claude / Whisper / pyannote / FastAPI / Spring Boot / PostgreSQL + pgvector / Yandex Cloud.

## Лицензия

Закрытый исходный код. Использование макета и текстов запрещено.
