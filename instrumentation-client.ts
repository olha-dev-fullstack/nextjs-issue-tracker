// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4ec39c185b83aea181a8987e86021041@o4509117331013632.ingest.de.sentry.io/4509117333110864",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});