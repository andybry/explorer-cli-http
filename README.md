# explorer-cli-http

HTTP run type for [explorer-cli](https://www.npmjs.com/package/explorer-cli)

Allows explorer-cli to make HTTP requests.

## Example

```json
{
    "runType": "http",
    "url": "https://api.github.com/",
    "headers": {
        "User-Agent": "request"
    },
    "json": true
}
```

## Keys

This is a wrapper around the [Request](https://www.npmjs.com/package/request) HTTP library. So any keys that are valid in a Request options object can be used.