"""Refresh public aggregate statistics; preserve the last valid snapshot on failure."""
import json
import os
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

PATH = Path("public/lifetime-stats.json")

def get_json(url, headers):
    with urlopen(Request(url, headers=headers), timeout=30) as response:
        return json.load(response)

def count(value):
    if isinstance(value, bool) or not isinstance(value, (int, float)) or value < 0 or int(value) != value:
        raise ValueError("Invalid counter value")
    return int(value)

def main():
    token = os.environ.get("METRIKA_TOKEN")
    if not token:
        raise RuntimeError("METRIKA_TOKEN is not configured")
    query = urlencode({"ids": "108660171", "metrics": "ym:s:users",
                       "date1": "2026-01-01", "date2": "today", "accuracy": "full"})
    metrika = get_json("https://api-metrika.yandex.net/stat/v1/data?" + query,
                       {"Authorization": "OAuth " + token})
    if metrika.get("sampled"):
        raise ValueError("Sampled Metrika response")
    visitors = count(metrika["totals"][0])
    release = get_json("https://api.github.com/repos/IgorKorkin/monograph/releases/tags/monograph-2026",
                       {"Accept": "application/vnd.github+json", "User-Agent": "monograph-stats",
                        "Authorization": "Bearer " + os.environ["GH_TOKEN"]})
    assets = [a for a in release["assets"] if a["name"] == "korkin-monograph.pdf"]
    if len(assets) != 1:
        raise ValueError("Expected exactly one PDF release asset")
    downloads = count(assets[0]["download_count"])
    previous = json.loads(PATH.read_text())
    if previous["visitors"] == visitors and previous["downloads"] == downloads:
        return
    snapshot = {"visitors": visitors, "downloads": downloads,
                "updated_at": datetime.now(timezone.utc).date().isoformat()}
    PATH.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n")

if __name__ == "__main__":
    main()
