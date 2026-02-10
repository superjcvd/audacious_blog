+++
title = 'Technical Cheatsheet'
date = 2023-01-15T09:00:00-07:00
draft = false
tags = ['cheatsheet', 'dns', 'networking', 'ssl']
toc = true
summary = 'DNS, netcat, nginx, nmap, and OpenSSL—handy CLI commands for debugging and pentesting.'
+++

Handy CLI commands for DNS, netcat, nginx, nmap, and OpenSSL—for debugging and pentesting.

<!--more-->

## DNS

Standard DNS requests from the CLI.

```shell
# install
apt install dnsutils

# simple request
dig www.example.com
# by type
dig a www.example.com
dig txt www.example.com
# use specific resolver
dig @8.8.8.8 www.example.com
# short output
dig @8.8.8.8 example.com A +noall +answer
dig @8.8.8.8 example.com ANY +noall +answer
# DMARC / DKIM
dig +short txt _dmarc.example.com
dig +short txt _domainkey.example.com
```

## DOH (DNS over HTTPS)

```shell
apt install curl

curl -H 'accept: application/dns-json' \
  'https://cloudflare-dns.com/dns-query?name=example.com&type=A' | jq .
```

## DOT (DNS over TLS)

```shell
apt install knot-dnsutils

kdig -d @cloudflare-dns.com +tls-ca +tls-host=cloudflare-dns.com example.com
```

## Netcat

Listen, connect, and quick port checks.

```shell
# listen on port
nc -lvp 4444

# connect
nc 192.168.1.10 4444
# connect with shell
nc -e /bin/bash 192.168.1.10 4444

# simple port scan
nc -v -n 192.168.1.10 1-1000
```

## Nginx

Common nginx commands and config checks.

```shell
# test config
nginx -t
# reload (keep connections)
nginx -s reload
# reopen logs
nginx -s reopen

# example minimal server block (snippet)
# server { listen 80; server_name example.com; root /var/www/html; index index.html; }
```

## Nmap

Recon and port scanning.

```shell
# install
apt install nmap

# ping scan
nmap -sn 192.168.1.0/24
# TCP ports (top 1000)
nmap 192.168.1.10
# specific ports
nmap -p 22,80,443 192.168.1.10
# service/version detection
nmap -sV 192.168.1.10
# quick TCP connect scan
nmap -sT -F 192.168.1.10
```

## OpenSSL

Check certs, connect over TLS, and quick key/cert examples.

```shell
# check cert (expiry, subject, issuer)
openssl s_client -connect example.com:443 -servername example.com 2>/dev/null | openssl x509 -noout -dates -subject -issuer

# connect and show cert
openssl s_client -connect example.com:443 -servername example.com

# generate key + self-signed cert (short)
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/CN=localhost"
```
