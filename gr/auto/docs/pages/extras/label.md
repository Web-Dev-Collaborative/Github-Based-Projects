## Using in scripts

The following will only run the test:visual script when the PR has has the  
 Visual label.

```sh
export PATH=$(npm bin):$PATH

if [ auto label --pr $PR_NUMBER | grep -c '^Visual' -ne 0 ];
then
  npm run test:visual
fi
```

## Without PR Number

Running `auto label` without the PR number will:

- When run in master will get the labels for the last merged PR
- When run for a PR in CI will use the PR's number
