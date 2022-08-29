#!/bin/bash
CMD=${1:-"run"}
set -ex

if [[ $CMD = "run" ]]; then
  npm install
  npm run dev
else
  echo "Unknown command $CMD"
  exit 127
fi;
