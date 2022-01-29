#!/usr/bin/env zsh

source $HOME/.readyrc

URI=$1

# compile on app load
if [ -z "$URI" ]; then;
  tsc && chmod +x ./build/*
  manymoons="🌕🌖🌗🌘🌙🌑🌒🌓🌔"
  stardate=$(date +'%S')
  moon="${manymoons:$(($stardate % ${#manymoons})):1}"
  echo "…. …. … … … … … … … … …… $moon … .. … ☁️ . . . ✨"

  exit 0;
fi;

echo 🔗::"$URI"
earthstars="🌍🌎🌏⚡️🚀🛰💫"
stardate=$(date +'%S')
star="${earthstars[$(($stardate % ${#earthstars}))]}"
echo "3, 2, 1 … … … … … … … …… $star … .. … ☁️ . . . ✨"

if [[ "$URI" =~ $RDYChromeURI ]]; then
  # open it in chrome
  open -a 'Google Chrome' $URI --args --profile-directory='Profile 3'
  echo 🏄::chrome
elif [[ "$URI" =~ $RDYFirefoxURI ]]; then
  # open it in the fox
  open -a 'Firefox Developer Edition' $URI
  echo 🦊::firefox
elif [[ "$URI" =~ ${RDYSafariURI:-"°^"} ]]; then
  # open it in safari
  open -a 'Safari' $URI
  echo 🦁::safari
# # TODO: narrow default constraint
# elif [[ "$URI" =~ $RDYURI ]]; then
#   # open it all regular like
#   open -a $RDYBrowser $URI
#   echo 🌊::default
else # check for prototypes
  ./build/ready-to-run.js $@
  echo 🧫::prototype
fi
