// Derive a publication label from an article URL.
const map = {
  "thecut.com": "The Cut",
  "vulture.com": "Vulture",
  "nymag.com": "New York",
  "qz.com": "Quartz",
  "youtube.com": "YouTube",
  "cnn.com": "CNN",
  "marketplace.org": "Marketplace",
  "mprnews.org": "NPR",
  "travelchannel.com": "Travel Channel",
  "podcasts.apple.com": "Podcast",
  "substack.com": "Substack",
};

export function pubFromUrl(url = "") {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    for (const k of Object.keys(map)) if (host.endsWith(k)) return map[k];
    return host;
  } catch {
    return "";
  }
}
