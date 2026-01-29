#!/bin/env bash

# Check SAN for IP issues during generate cert
openssl x509 -in ~/.local/share/mkcert/localhost.pem -noout -text | grep -A1 "Subject Alternative Name"
