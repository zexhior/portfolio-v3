#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ] || [ "$#" -gt 2 ]; then
  echo "Usage: $0 <user@host> [docker-image]"
  echo "Example: $0 deploy@123.45.67.89 my-image:latest"
  exit 1
fi

VPS_TARGET="$1"
IMAGE="${2:-your-image:latest}"
REMOTE_PATH="/home/deploy/portfolio"

ssh "$VPS_TARGET" "set -e; cd '$REMOTE_PATH'; docker pull '$IMAGE'"
