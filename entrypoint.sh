#!/bin/bash
CMD=${1:-"run"}
set -ex

if [[ $CMD = "run" ]]; then
  yarn install
  yarn run dev
else
  echo "Unknown command $CMD"
  exit 127
fi;
