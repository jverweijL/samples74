# Liferay React App

2022-3-3

```
nvm install v14.19.0
nvm use v14.19.0
mkdir 1
cd 1
curl -Ls https://github.com/liferay/liferay-portal/raw/master/tools/create_remote_app.sh | bash -s liferay-hello-react react
cd liferay-hello-react
yarn build
cd build/static/js
cat *.js > main.js
```