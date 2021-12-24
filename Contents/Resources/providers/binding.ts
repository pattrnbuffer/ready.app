type BindingProps = {};

/**
 * binding – which is … er, some kind of hook into this whole apparatus
 */
export const binding = {
  create: () => ({
    start(session?: BindingProps) {},
    finish(session?: BindingProps) {
      // quit apps
      // const pkills = Object.keys(open).map((app) => $`pkill -o -x ${app}`);
      // quit vscode repos
      // TODO: how to selectively close vscode projects via cli
      // terminate processes
      // TODO: use pkill and pattern match
      // TODO: find identifier for processes, or make one
      // … … …
      // … end docker instances
      // … TODO: how to gracefully quit dock?
      // return await Promise.allSettled(pkills);
    },
  }),
};
