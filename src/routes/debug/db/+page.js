import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// Breadcrumbs.
// @link https://blog.aakashgoplani.in/generate-breadcrumb-and-navigation-in-sveltekit
export const load = (async () => {
  return {
    showBreadcrumb: true,
    label: 'DB'
  };
});
