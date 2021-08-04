import { resolve } from "path"
import { readFileSync } from "fs"

const fixtures = resolve(__dirname, "fixtures")

/** Returns JSON from the fixtured dir */
export const requestWithFixturedJSON = async (path: string): Promise<() => Promise<any>> => () =>
  Promise.resolve(JSON.parse(readFileSync(`${fixtures}/${path}`, {}).toString()))

class mockBitBucketServerAPI /*tslint:disable-line*/ {
  async getPullRequestInfo() {
    const fixtures = await requestWithFixturedJSON("bitbucket_server_pr.json")
    return await fixtures()
  }
  async getIssues() {
    const fixtures = await requestWithFixturedJSON("bitbucket_server_issues.json")
    return await fixtures()
  }
  async getPullRequestCommits() {
    const fixtures = await requestWithFixturedJSON("bitbucket_server_commits.json")
    return await fixtures()
  }
  async getPullRequestComments() {
    const fixtures = await requestWithFixturedJSON("bitbucket_server_comments.json")
    return await fixtures()
  }
  async getPullRequestChanges() {
    const fixtures = await requestWithFixturedJSON("bitbucket_server_changes.json")
    return await fixtures()
  }
  async getPullRequestActivities() {
    const fixtures = await requestWithFixturedJSON("bitbucket_server_activities.json")
    return await fixtures()
  }
}

// Mock API class
jest.mock("../bitbucket_server/BitBucketServerAPI", () => {
  return { BitBucketServerAPI: mockBitBucketServerAPI }
})

import { BitBucketServer } from "../BitBucketServer"
import { BitBucketServerAPI } from "../bitbucket_server/BitBucketServerAPI"

import { RepoMetaData } from "../../dsl/BitBucketServerDSL"

describe("getPlatformReviewDSLRepresentation", () => {
  let bbs: BitBucketServer
  let api: BitBucketServerAPI

  beforeEach(() => {
    api = new BitBucketServerAPI({} as RepoMetaData, { host: "fake://host" })
    bbs = new BitBucketServer(api)
  })

  it("should return the correct review title from getReviewInfo", async () => {
    const info = await bbs.getReviewInfo()
    expect(info.title).toEqual("Pull request title")
  })

  it("should get the commits of the pull request", async () => {
    const { commits } = await bbs.getPlatformReviewDSLRepresentation()
    expect(commits).toMatchSnapshot()
  })

  it("should get the activities", async () => {
    const { activities } = await bbs.getPlatformReviewDSLRepresentation()
    expect(activities).toMatchSnapshot()
  })

  it("should get the reviewer comments", async () => {
    const { comments } = await bbs.getPlatformReviewDSLRepresentation()
    expect(comments).toMatchSnapshot()
  })

  it("should get the pull request information", async () => {
    const { pr } = await bbs.getPlatformReviewDSLRepresentation()
    expect(pr).toMatchSnapshot()
  })

  it("should get the metadata", async () => {
    const dsl = await bbs.getPlatformReviewDSLRepresentation()
    expect(dsl.metadata).toMatchSnapshot()
  })

  it("should update status", async () => {
    api.postBuildStatus = jest.fn().mockReturnValue({ ok: true })
    await bbs.updateStatus(true, "message", undefined, "danger", undefined)

    expect(api.postBuildStatus).toHaveBeenCalledWith("d6725486c38d46a33e76f622cf24b9a388c8d13d", {
      state: "SUCCESSFUL",
      key: "danger",
      name: "danger",
      url: "http://danger.systems/js",
      description: "message",
    })
  })

  it("should update status with ci commit hash", async () => {
    api.postBuildStatus = jest.fn().mockReturnValue({ ok: true })
    await bbs.updateStatus(true, "message", undefined, "danger", "abc1234")

    expect(api.postBuildStatus).toHaveBeenCalledWith("abc1234", {
      state: "SUCCESSFUL",
      key: "danger",
      name: "danger",
      url: "http://danger.systems/js",
      description: "message",
    })
  })
})
