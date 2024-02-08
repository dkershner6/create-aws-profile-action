# Create AWS Profile GitHub Action

A GitHub action to setup an AWS profile on the file system.

## Inputs

### `key`

**Required** The AWS key

### `secret`

**Required** The AWS secret

### `region`

**Required** The AWS region

### `profile`

**Required** The name of the profile you want to create

### `sessionToken`

**Optional** The AWS session token

## Example usage

```
uses: dkershner6/create-aws-profile-action@v1
with:
  profile: staging
  region: us-west-1
  key: xxx
  secret: xxx
  sessionToken: xxx
```

## Credit

Initial code shamelessly stolen from [Fooji](https://github.com/Fooji/create-aws-profile-action)