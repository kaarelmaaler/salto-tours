# Salto newsletter template

`salto-newsletter.html` is the master email for MailerLite’s Custom HTML editor. Layout is tables. The content column is 640px. The black header runs the full width of the message. Colours are grey `#acacb6`, white cards, black text, and green `#00ff97`. Type is `Arial, Helvetica, sans-serif` only.

Paste the whole file. Do not rebuild it in the drag-and-drop editor.

## Logo

```
https://salto.tours/salto-logo.png
```

The image is `public/salto-logo.png` (800×195). The email shows it at 140×34, centered in the full-width black header. `alt` is `SALTO`.

That URL works after a website deploy that includes `public/salto-logo.png`. The file is in this project and is not on the live site until that deploy. Do not point the header at a localhost or relative path.

## Text to edit

| Comment | What it is |
| --- | --- |
| `<!-- PREHEADER -->` | Inbox preview line. Hidden in the body. |
| `<!-- HIMOS DATE -->` | Himos date pill. Default: `27.12–03.01`. |
| `<!-- HIMOS TITLE -->` | Himos headline. |
| `<!-- HIMOS INTRO -->` | Himos paragraph. |
| `<!-- JAPAN DATE -->` | Japan date pill. Default: `20–30.01`. |
| `<!-- JAPAN TITLE -->` | Japan headline. |
| `<!-- JAPAN INTRO -->` | Japan paragraph. |
| `<!-- NEWS HEADING -->` | News heading. Default: `MIS SALTOS TOIMUB?` |
| `<!-- NEWS TEXT -->` | Short news, announcement, or last-minute note. |

Button labels stay `VAATA REISI` unless you want different words. Change the address, not the green cell, when the destination changes.

## Images to replace

These are the live cover files from Sanity. They are absolute `https://` URLs. JPEG, no `auto=format`, so Outlook does not receive WebP.

| Comment | Current URL | Alt text |
| --- | --- | --- |
| `<!-- HIMOS IMAGE -->` | `https://cdn.sanity.io/images/yb1iafqe/production/91745312a488ad2b3eafb3524b3bb434e1344c23-2000x1333.jpg?w=1200&fit=max` | `Lapsed suuskadel` |
| `<!-- JAPAN IMAGE -->` | `https://cdn.sanity.io/images/yb1iafqe/production/46632f73e47f98337ea4bf3d53746aa8eae27c41-1500x2000.jpg?w=1200&fit=max` | `Suusatajad lumises metsas` |

Replace a `src` when a trip gets a new photo. Keep `width`, `height:auto`, and `class="trip-img"` so the picture scales to the card. Write alt text that describes the new photo.

The Japan file is a portrait (1500×2000), so that card is taller than Himos. That is the published cover, not a crop.

No image URL in this file still needs a manual placeholder swap.

## Links to replace

| Comment | Current URL |
| --- | --- |
| `<!-- HIMOS CTA URL -->` | `https://salto.tours/reisid/himos` |
| `<!-- JAPAN CTA URL -->` | `https://salto.tours/reisid/jaapan` |

Footer links, unless the address changes:

- `https://salto.tours/`
- `mailto:hei@salto.tours`

## Paste into MailerLite

1. Create a campaign and choose the Custom HTML editor.
2. Copy `newsletter/salto-newsletter.html` from `<!DOCTYPE html>` through `</html>`.
3. Paste it over any starter markup.
4. Preview at desktop width and at about 375px.
5. Send a test before the real send.

If you write the plain-text version by hand, it also needs `{$unsubscribe}`.

## Do not remove

- `<!DOCTYPE html>`, `<head>`, and `<body>`.
- The `<style>` block. It only resets clients and tightens type and images under 640px. The layout stays in tables.
- `bgcolor`, inline `style`, and `role="presentation"` on the layout tables.
- The `<!--[if mso]>` wrappers around the 640px column and the centered logo. Outlook uses those.
- Image `alt` text and the `width` / `height:auto` pair.
- The footer lines: Salto reisid, salto.tours, hei@salto.tours.

Outlook ignores `border-radius`, so cards and pills are square there. Other clients keep the rounded corners.

## Unsubscribe link

This must stay in the footer:

```html
<a href="{$unsubscribe}" style="color:#000000; text-decoration:underline;">Loobu uudiskirjast</a>
```

`{$unsubscribe}` is MailerLite’s variable. On send it becomes that subscriber’s unsubscribe URL. Do not replace it with a normal address, and do not delete the link. The visible words can change. The `href` cannot. MailerLite will not send the campaign if this variable is missing.
