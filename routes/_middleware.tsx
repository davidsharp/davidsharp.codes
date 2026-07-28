import { createDefine } from "fresh";

// You must call the function to create the 'define' object
const define = createDefine();

// redirects a subdomain to a subfolder
export default define.middleware(async (ctx) => {
  if (ctx.url.hostname === "we-eloped.davidsharp.codes") {
    if (!ctx.url.pathname.startsWith("/we-eloped")) {
      const redirectUrl = new URL(`/we-eloped${ctx.url.pathname}`, ctx.url.origin);
      return ctx.redirect(redirectUrl.href, 307);
    }
  }
  return await ctx.next();
});
