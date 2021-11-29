#!/usr/bin/env bash
docker image build -t agile:app --build-arg ssh_prv_key="$(cat ~/.ssh/id_rsa)" -f dev.Dockerfile .