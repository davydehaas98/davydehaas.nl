# Get latest nginx image 
FROM nginx:1.27.0@sha256:1aaa8180df68200fd41f9066cf62155e3b71183c04b2895a7388d5fd84ef3c8b

RUN rm -rf /usr/share/nginx/html/*

COPY ./build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
