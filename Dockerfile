FROM ubuntu:16.04
MAINTAINER iKardanov <ikardanov@wavesplatform.com>

RUN apt-get -y update

# Install dependencies
RUN apt-get install -y curl git calibre && \
	curl -sL https://deb.nodesource.com/setup | bash - && \
	apt-get install -y nodejs && \
	npm install -g gitbook-cli


# Install latest version
RUN gitbook install latest

RUN mkdir /gitbook
WORKDIR /gitbook
RUN git clone https://github.com/wavesplatform/waves-documentation.git
WORKDIR waves-documentation

EXPOSE 4000


CMD ["gitbook", "serve"]









# serve
# docker run -d -p 4000:4000
