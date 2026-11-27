# Public lifetime statistics

Create a Yandex OAuth token with read-only Metrica access (metrika:read) for counter 108660171. Add it as the repository Actions secret METRIKA_TOKEN under Settings > Secrets and variables > Actions. Never commit the token.

After merging, run the existing Deploy Vite site to GitHub Pages workflow manually on main. It also runs daily at 03:23 UTC. The workflow uses the built-in GitHub token to read the release asset and save the aggregate JSON to main (repository policies must allow this bot push). No new hosting or dependencies are needed.

Visitors: ym:s:users for the entire period from 2026-01-01, assuming the counter was started in 2026 and dedicated to this site. These are analytics users, not verified unique people. Do not sum daily unique visitors.
Downloads: download_count for korkin-monograph.pdf in release monograph-2026. Direct Pages PDF views and other distribution platforms are not counted. Replacing the release asset resets the GitHub count.
The UI hides the counters until valid data exists; an API error preserves the last committed snapshot. Only public aggregate counts and the snapshot date are stored. If branch protection blocks the bot push, the current deployment can still display updated data but future failed runs may fall back to the older committed snapshot. Verify the first run and the published lifetime-stats.json.
