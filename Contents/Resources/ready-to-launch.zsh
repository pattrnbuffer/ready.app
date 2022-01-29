#!/usr/bin/env zsh

source $HOME/.readyrc

URI=$1
stardate=$(date +'%S')

manymoons="🌕🌖🌗🌘🌙🌑🌒🌓🌔"
moon="${manymoons:$(($stardate % ${#manymoons})):1}"
echo "…. …. … … … … … … … … …… $moon … .. … ☁️ . . . ✨"

if [ -z "$URI" ]; then; exit 0; fi;

earthstars="🌍🌎🌏⚡️🚀🛰💫"
star="${earthstars[$(($stardate % ${#earthstars}))]}"
echo "3, 2, 1 … … … … … … … …… $star … .. … ☁️ . . . ✨"

echo 🔗::"$URI"
# open it in chrome
if [[ "$URI" =~ $RDYChromeURI ]]; then
  echo 🏄::chrome
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
  echo 🌊::default
  time open -a $RDYBrowser $URI
# check for prototypes
else
  echo 🧫::prototype
  time './ready-to-run.ts' $@
fi
