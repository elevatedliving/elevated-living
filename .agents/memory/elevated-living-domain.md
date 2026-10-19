---
name: Elevated Living domain
description: The company's primary web domain and domain consistency requirement.
---

Elevated Living's canonical domain is `elevatedliving.uk`; it has never been `elevatedliving.co.uk`. The `www` host redirects to the bare domain, so social image URLs should use the bare host directly.

**Why:** The user explicitly corrected the domain and asked that the site use `.uk`. Production requests to `www.elevatedliving.uk` return a redirect to `elevatedliving.uk`, which adds an avoidable hop for social crawlers.

**How to apply:** Use `elevatedliving.uk` for canonical URLs, sitemaps, robots directives, social metadata, image URLs, and website links. Never use `elevatedliving.co.uk`.
