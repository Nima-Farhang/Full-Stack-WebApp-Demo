######### For building the image with the files already there 

cd frontend
npm install
cd..
docker-compose run backend


##################### Turn  on and shutt down

docker-compose up/down


############### Connecting to dockers

sudo docker logs -f backend 

sudo docker exec -it backend bash

docker exec -it frontend /bin/sh

sudo docker exec -it postgres psql -U root

docker exec -it jupyter bash

########################## npm codes for setting up react



npx create-react-app frontend

npm install 

npm start

npm run build

################# NPM Packages

npm install react-bootstrap
npm install react-router-dom


#####################





docker tag docker_practice_django:latest django_practice:0.1


python manage.py createsuperuser

python manage.py makemigrations
python manage.py migrate



DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'backend-app-db',
        'USER':  'root',
        'PASSWORD':  'Samira@1975Samira@1975',
        'HOST' : 'pgdb',
        'port': 5432
    }
}

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'backend-app-db',
        'USER':  'root',
        'PASSWORD':  'Samira@1975Samira@1975',
        'HOST': 'db',
        'port': 3306
    }
}

    'rest_framework',
    'products.apps.ProductsConfig'
]

pygraphviz


GRAPH_MODELS = {
  'all_applications': True,
  'group_models': True,
}




npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i react react-dom --save-dev

npm install @babel/plugin-proposal-class-properties
npm install react-router-dom
npm config set legacy-peer-deps true
npm i
npm install @material-ui/core
npm install @material-ui/icons

WATCHPACK_POLLING=true 