#!/usr/bin/env zsh

echo "3, 2, 1 … … … … … … … …… 🚀 … .. … ☁️ . . . ✨"
source $HOME/.readyrc

# URI=cat $1 sed 's/Updater/updater/'
URI=$1

echo 🔗::"$1"

# open it in chrome
if [[ "$URI" =~ $RDYChromeURI ]]; then
  echo 🏄🏽::chrome
  time open -a 'Google Chrome' $URI --args --profile-directory='Profile 3'
# open it in the fox
elif [[ "$URI" =~ $RDYFirefoxURI ]]; then
  echo 🦊::firefox
  time open -a 'Firefox Developer Edition' $URI
# open it in safari
elif [[ "$URI" =~ ${RDYSafariURI:-"°^"} ]]; then
  echo 🦁::safari
  time open -a 'Safari' $URI
# open it all regular like
elif [[ "$URI" =~ $RDYURI ]]; then
  echo 🏄‍♂️::default
  time open -a $RDYBrowser $URI
# check for prototypes
else
  echo 🧫::prototype
  time './ready-to-run.ts' $@
fi
