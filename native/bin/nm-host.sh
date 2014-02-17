#!/bin/bash -l

ROOT_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
SCRIPT_PATH="$(echo $ROOT_PATH)/bin/chromuxinator-backend"

exec $NODE $SCRIPT_PATH --native-messaging-host
