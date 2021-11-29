#!/usr/bin/env bash
docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app agile:app