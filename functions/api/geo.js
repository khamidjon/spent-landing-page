/**
 * Cloudflare Pages Function — returns the visitor's country.
 *
 * Cloudflare fills in `request.cf.country` at the edge, so this needs no
 * third-party geo API, no token, and no cross-origin request. Same-origin and
 * served from the nearest PoP, so it answers in a few ms.
 *
 * The landing page only calls this when the browser language is plain English
 * (the ambiguous case — many phones in Uzbekistan are set to English while the
 * user would rather read Uzbek or Russian).
 */
export function onRequestGet({ request }) {
  const country = (request.cf && request.cf.country) || '';
  return new Response(JSON.stringify({ country }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // Per-visitor answer, so let the browser reuse it but never a shared cache.
      'cache-control': 'private, max-age=3600',
    },
  });
}
