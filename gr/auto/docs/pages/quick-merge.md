# Merging Quickly

One major caveat of `auto` is that you need to be mindful of merging multiple PRs at once. You **must not** merge two PRs at once or you _will_ botch one of the releases.

`auto` works by looking at the `git` tree to calculate the version bump then makes commits for the `CHANGELOG.md` and the new version. If you merge two PRs at once:

1. one might pick up the others changes
2. they might try to publish the same version number
3. one will try to push over the other's changes and fail

::: message is-success
If you ensure that the last build on master has finished you shouldn't run into any problems!
:::

## With `skip-release`

The one exception to this rule with when merging a bunch of PRs with `skip-release` labels.

You still can't merge a PR that triggers a release and then merge a PR with `skip-release`. This will result in problem 3 from above.

```txt
1. Merge PR #4 "patch"
2. Merge PR #5 "skip-release"

Result: #4 tries to push commits over #5 and fails
```

But you can merge a bunch of PRs with `skip-release` then merge a PR that triggers a release.

```txt
1. Merge PR #4 "skip-release"
2. Merge PR #5 "skip-release"
3. Merge PR #7 "patch"

Result: 1 "patch" released w/all PRs
```

Because `skip-release` is present no commits are made and the release is fine!
