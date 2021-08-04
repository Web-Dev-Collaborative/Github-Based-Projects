#!/usr/bin/env bats

load bootstrap

PATH="$PATH:$BATS_TEST_DIRNAME/../bin"

export GITHUB_EVENT_PATH="$BATS_TEST_DIRNAME/fixtures/event.json"

@test "user: matches issue user" {
  run user issue-user
  [ "$status" -eq 0 ]
  [ "$output" = "" ]
}

@test "user: matches pr user" {
  export GITHUB_EVENT_PATH="$BATS_TEST_DIRNAME/fixtures/pull_request_event.json" run label urgent
  run user pr-user
  [ "$status" -eq 0 ]
  [ "$output" = "" ]
}

@test "user: matches one of the provided users" {
  run user some-other-user issue-user
  [ "$status" -eq 0 ]
  [ "$output" = "" ]
}

@test "user: does not match" {
  run user some-other-user
  [ "$status" -eq 78 ]
  [ "$output" = "user does not match" ]
}
