import { app } from "../providers";

const protocol = /https?:\/\//;

const { RDYChromeURI, RDYFirefoxURI, RDYSafariURI, RDYBrowser } = process.env;

const [chrome, firefox, safari] = [
  RDYChromeURI,
  RDYFirefoxURI,
  RDYSafariURI,
].map((pattern) => (pattern ? new RegExp(pattern, "i") : void 0));

const fallback = app[RDYBrowser?.toLowerCase() as keyof typeof app];

export const http = {
  mount(uri: string) {
    // this is not our fight
    if (!protocol.test(uri)) {
      return;
    }

    // open it in chrome
    if (chrome?.test(uri)) {
      return app.chrome.open(uri);
    }
    // open it in the 🦊
    else if (firefox?.test(uri)) {
      return app.firefox.open(uri);
    }
    // open it in safari
    else if (safari?.test(uri)) {
      return app.safari.open(uri);
    }
    // open it all regular like
    else {
      return (
        fallback?.open(uri) ||
        console.warn("Failed to open default browser:", RDYBrowser)
      );
    }
  },
};
