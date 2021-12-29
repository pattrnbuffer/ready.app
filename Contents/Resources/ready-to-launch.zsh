#!/usr/bin/env zsh

echo "3, 2, 1 … … … … … … … …… 🚀 … .. … ☁️ . . . ✨"
source $HOME/.readyrc

URI="$1:l"

# open it in chrome
if [[ "$URI" =~ $RDYChromeURI ]]; then
  time open -a 'Google Chrome' $URI --args --profile-directory='Profile 3'
# open it in the 🦊
elif [[ "$URI" =~ $RDYFirefoxURI ]]; then
  time open -a 'Firefox Developer Edition' $URI
# open it in safari
elif [[ "$URI" =~ ${RDYSafariURI:-"°^"} ]]; then
  time open -a 'Safari' $URI
# open it all regular like
# elif [[ "$URI" =~ $RDYURI ]]; then
#   time open -a $RDYBrowser $URI
else
  echo "slow match in progress …"
  time './ready-to-run.ts' $@
fi
