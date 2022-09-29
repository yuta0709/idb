# idb

## 準備

`front`に`.env.local`を配置して以下を記載

```text
NEXT_PUBLIC_API_ORIGIN="YOUR_API_ORIGIN"

```

## 実行

```console
git clone git@github.com:yuta0709/idb.git
cd idb
docker-compose build
docker-compose up
```

[http://localhost:8080/ideas](http://localhost:8080/ideas)に Postman とかでリクエスト投げてみて
