+++
title = 'Cheat Sheet - DNS'
date = 2023-01-15T09:00:00-07:00
draft = false
tags = ['cheatsheet', 'dns']
+++

Few command lines that can be used for crafting DNS requests for debug purposes

<!--more-->

## DNS

How to send standard DNS requests with CLI

```shell
### INSTALL
apt install dnsutils


# simple dns request
dig www.example.com
# specify request type
dig a www.example.com
dig txt www.example.com
# specify dns server
dig @dns_server www.example.com
# short answer
dig @server redhat.com  A +noall +answer
# short answer with all
dig @server redhat.com  ANY +noall +answer
# DMARC
dig +short txt _dmarc.teads.com
dig +short txt _domainkey.teads.com
dig +short txt google._domainkey.teads.com
```

## DOH

How to send DOH DNS requests with CLI

```shell
### INSTALL
apt install curl

# simple dns request
curl -H 'accept: application/dns-json' '\
https://cloudflare-dns.com/dns-query?name=example.com&type=A' | jq .
```

## DOT

How to send DOT DNS requests with CLI

```shell
### INSTALL
apt install knot-dnsutils

# simple dns request
kdig -d @cloudflare-dns.com +tls-ca +tls-host=cloudflare-dns.com example.com
```
