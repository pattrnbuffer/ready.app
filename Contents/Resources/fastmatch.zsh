#!/usr/bin/env zsh

unsetopt CASE_MATCH

URI=$1

if [[ "$URI" =~ $RDYChromeURI ]]; then
  # open it in chrome
  echo 🏄::chrome
  open -a 'Google Chrome' $URI --args --profile-directory='Profile 3'
elif [[ "$URI" =~ $RDYFirefoxURI ]]; then
  # open it in the fox
  echo 🦊::firefox
  open -a 'Firefox Developer Edition' $URI
elif [[ "$URI" =~ ${RDYSafariURI:-"°^"} ]]; then
  # open it in safari
  echo 🦁::safari
  open -a 'Safari' $URI
# # TODO: narrow default constraint
# elif [[ "$URI" =~ $RDYURI ]]; then
#   # open it all regular like
#   open -a $RDYBrowser $URI
#   echo 🌊::default
else # check for prototypes
  echo 🧫::prototype
  ./build/ready-to-run.js $@
fi
