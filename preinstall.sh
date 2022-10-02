set -e

echo "Check if eslint is installed..."
npm list -g | grep eslint || npm install -g eslint --ignore-scripts
echo "Check if npm-check-updates is installed..."
npm list -g | grep npm-check-updates || npm install -g npm-check-updates --ignore-scripts

echo "Start to install packages"
npm install --ignore-scripts

echo "Finished!"
exit 0