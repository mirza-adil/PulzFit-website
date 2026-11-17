# Content Quality

Score: **62/100** local build · 45/100 live · weight 23%

## What works
- Homepage 1,444 words; ECG guide 784 words; features hub 454 words; all >= 67% unique vs each other
- 109-word 'What is PulzFit?' answer block at 5% of the homepage plus an 11-row specs table
- ECG guide states limits clearly (cannot detect heart attack, not continuous, not a diagnosis)
- Readability around Flesch 51 / US grade 8 on the homepage
- Overclaiming removed ('medical-grade', '17+ dimensions', 'cardiologist' comparison)

## Findings
### [High] No About/team page or named experts
Health (YMYL) product with anonymous authorship.

**Fix:** About page with founders and any clinical/engineering advisors; Person schema.

### [High] No Privacy Policy or Terms
GA4 via Firebase runs for EU visitors; legal and trust requirement.

**Fix:** Publish both pages (text needed), add footer links, consider cookie consent.

### [Medium] Accuracy claims unsourced
FAQ claims +/-2 BPM and +/-2% SpO2 without method or reference device.

**Fix:** Add a validation summary (method, reference device, sample, date).

### [Medium] ECG guide medical wording needs expert review
General ECG statements are conservative but should be checked; app-flow details need confirming.

**Fix:** Review by a qualified person before deploy.
