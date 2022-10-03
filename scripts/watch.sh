set -e

if [ ! -f ./.env ]; then
    echo "Oops! Looks like you haven't pre-installed it yet!"
    sh ./scripts/preinstall.sh
fi

npm run lint && rollup -c rollup.config.js -w --environment MODE:development
exit 0