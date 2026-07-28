#!/bin/bash
cd "$(dirname "$0")"

echo "Starting local Jekyll server..."
echo "Press Ctrl+C to stop."
echo ""

( sleep 8 && xdg-open http://127.0.0.1:4000/ ) &

bundle exec jekyll serve
