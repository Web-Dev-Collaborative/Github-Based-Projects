## Usage

```json
{
  "scripts": {
    "postpublish": "auto release"
  }
}
```

Make sure the branch/tag you're releasing is on github before running `auto release`.
You will need to push the tags to github first:

```json
{
  "scripts": {
    "postpublish": "git push --follow-tags --set-upstream origin $branch && auto release"
  }
}
```

## Github Release Details

The details / description published with the Github release will be identical to those generated by the `auto changelog` command.
See information regarding the release note format [here](./changelog.md#changelog-titles).