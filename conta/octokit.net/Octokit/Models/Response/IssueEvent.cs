using System;
using System.Diagnostics;
using System.Globalization;

namespace Octokit
{
    [DebuggerDisplay("{DebuggerDisplay,nq}")]
    public class IssueEvent
    {
        public IssueEvent() { }

        public IssueEvent(long id, string nodeId, string url, User actor, User assignee, Label label, EventInfoState @event, string commitId, DateTimeOffset createdAt, Issue issue, string commitUrl, RenameInfo rename, IssueEventProjectCard projectCard)
        {
            Id = id;
            NodeId = nodeId;
            Url = url;
            Actor = actor;
            Assignee = assignee;
            Label = label;
            Event = @event;
            CommitId = commitId;
            CreatedAt = createdAt;
            Issue = issue;
            CommitUrl = commitUrl;
            Rename = rename;
            ProjectCard = projectCard;
        }

        /// <summary>
        /// The id of the issue/pull request event.
        /// </summary>
        public long Id { get; protected set; }

        /// <summary>
        /// GraphQL Node Id
        /// </summary>
        public string NodeId { get; protected set; }

        /// <summary>
        /// The URL for this issue/pull request event.
        /// </summary>
        public string Url { get; protected set; }

        /// <summary>
        /// Always the User that generated the event.
        /// </summary>
        public User Actor { get; protected set; }

        /// <summary>
        /// The user that was assigned, if the event was 'Assigned'.
        /// </summary>
        public User Assignee { get; protected set; }

        /// <summary>
        /// The label that was assigned, if the event was 'Labeled'
        /// </summary>
        public Label Label { get; protected set; }

        /// <summary>
        /// Identifies the actual type of Event that occurred.
        /// </summary>
        public StringEnum<EventInfoState> Event { get; protected set; }

        /// <summary>
        /// The String SHA of a commit that referenced this Issue.
        /// </summary>
        public string CommitId { get; protected set; }

        /// <summary>
        /// The commit URL of a commit that referenced this issue.
        /// </summary>
        public string CommitUrl { get; protected set; }

        /// <summary>
        /// Date the event occurred for the issue/pull request.
        /// </summary>
        public DateTimeOffset CreatedAt { get; protected set; }

        /// <summary>
        /// The issue associated to this event.
        /// </summary>
        public Issue Issue { get; protected set; }

        /// <summary>
        /// An object containing rename details
        /// Only provided for renamed events
        /// </summary>
        public RenameInfo Rename { get; protected set; }

        /// <summary>
        /// Information about the project card that triggered the event.
        /// The project_card attribute is not returned if someone deletes the project board, or if you do not have permission to view it.
        /// </summary>
        public IssueEventProjectCard ProjectCard { get; protected set; }

        internal string DebuggerDisplay
        {
            get { return string.Format(CultureInfo.InvariantCulture, "Id: {0} CreatedAt: {1}", Id, CreatedAt); }
        }
    }
}
