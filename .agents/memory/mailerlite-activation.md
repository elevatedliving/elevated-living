---
name: MailerLite activation
description: Distinguish successful embed loading from provider-controlled popup activation.
---

A successful MailerLite loader download does not prove that a popup is enabled. Behaviour settings such as “always” and a six-second delay are separate from the popup's active status.

**Why:** A popup failed to display despite correctly configured behaviour and a working embed because its status switch in MailerLite was off.

**How to apply:** When diagnosing missing popups, check whether MailerLite supplies an active popup definition before changing the site code or attributing the failure to cookies or browser settings.
