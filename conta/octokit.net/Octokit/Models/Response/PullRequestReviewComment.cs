using System;
using System.Diagnostics;
using System.Globalization;
using Octokit.Internal;

namespace Octokit
{
    [DebuggerDisplay("{DebuggerDisplay,nq}")]
    public class PullRequestReviewComment
    {
        public PullRequestReviewComment() { }

        public PullRequestReviewComment(int id)
        {
            Id = id;
        }

        public PullRequestReviewComment(string url, int id, string nodeId, string diffHunk, string path, int? position, int? originalPosition, string commitId, string originalCommitId, User user, string body, DateTimeOffset createdAt, DateTimeOffset updatedAt, string htmlUrl, string pullRequestUrl, ReactionSummary reactions, int? inReplyToId, int? pullRequestReviewId, AuthorAssociation authorAssociation)
        {
            PullRequestReviewId = pullRequestReviewId;
            Url = url;
            Id = id;
            NodeId = nodeId;
            DiffHunk = diffHunk;
            Path = path;
            Position = position;
            OriginalPosition = originalPosition;
            CommitId = commitId;
            OriginalCommitId = originalCommitId;
            User = user;
            Body = body;
            CreatedAt = createdAt;
            UpdatedAt = updatedAt;
            HtmlUrl = htmlUrl;
            PullRequestUrl = pullRequestUrl;
            Reactions = reactions;
            InReplyToId = inReplyToId;
            AuthorAssociation = authorAssociation;
        }

        /// <summary>
        /// URL of the comment via the API.
        /// </summary>
        public string Url { get; protected set; }

        /// <summary>
        /// The comment Id.
        /// </summary>
        public int Id { get; protected set; }

        /// <summary>
        /// GraphQL Node Id
        /// </summary>
        public string NodeId { get; protected set; }

        /// <summary>
        /// The diff hunk the comment is about.
        /// </summary>
        public string DiffHunk { get; protected set; }

        /// <summary>
        /// The relative path of the file the comment is about.
        /// </summary>
        public string Path { get; protected set; }

        /// <summary>
        /// The line index in the diff.
        /// </summary>
        public int? Position { get; protected set; }

        /// <summary>
        /// The comment original position.
        /// </summary>
        public int? OriginalPosition { get; protected set; }

        /// <summary>
        /// The commit Id the comment is associated with.
        /// </summary>
        public string CommitId { get; protected set; }

        /// <summary>
        /// The original commit Id the comment is associated with.
        /// </summary>
        public string OriginalCommitId { get; protected set; }

        /// <summary>
        /// The user that created the comment.
        /// </summary>
        public User User { get; protected set; }

        /// <summary>
        /// The text of the comment.
        /// </summary>
        public string Body { get; protected set; }

        /// <summary>
        /// The date the comment was created.
        /// </summary>
        public DateTimeOffset CreatedAt { get; protected set; }

        /// <summary>
        /// The date the comment was last updated.
        /// </summary>
        public DateTimeOffset UpdatedAt { get; protected set; }

        /// <summary>
        /// The URL for this comment on Github.com
        /// </summary>
        public string HtmlUrl { get; protected set; }

        /// <summary>
        /// The URL for the pull request via the API.
        /// </summary>
        public string PullRequestUrl { get; protected set; }

        /// <summary>
        /// The reaction summary for this comment.
        /// </summary>
        public ReactionSummary Reactions { get; protected set; }

        /// <summary>
        /// The Id of the comment this comment replys to.
        /// </summary>
        public int? InReplyToId { get; protected set; }

        /// <summary>
        /// The Id of the pull request this comment belongs to.
        /// </summary>
        public int? PullRequestReviewId { get; protected set; }

        /// <summary>
        /// The comment author association with repository.
        /// </summary>
        public StringEnum<AuthorAssociation> AuthorAssociation { get; protected set; }

        internal string DebuggerDisplay
        {
            get { return string.Format(CultureInfo.InvariantCulture, "Id: {0}, Path: {1}, User: {2}, Url: {3}", Id, Path, User.DebuggerDisplay, Url); }
        }
    }

    public enum PullRequestReviewCommentSort
    {
        /// <summary>
        /// Sort by create date (default)
        /// </summary>
        [Parameter(Value = "created")]
        Created,

        /// <summary>
        /// Sort by the date of the last update
        /// </summary>
        [Parameter(Value = "updated")]
        Updated
    }
}
