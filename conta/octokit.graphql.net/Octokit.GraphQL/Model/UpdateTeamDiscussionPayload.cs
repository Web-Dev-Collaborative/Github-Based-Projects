namespace Octokit.GraphQL.Model
{
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using Octokit.GraphQL.Core;
    using Octokit.GraphQL.Core.Builders;

    /// <summary>
    /// Autogenerated return type of UpdateTeamDiscussion
    /// </summary>
    public class UpdateTeamDiscussionPayload : QueryableValue<UpdateTeamDiscussionPayload>
    {
        internal UpdateTeamDiscussionPayload(Expression expression) : base(expression)
        {
        }

        /// <summary>
        /// A unique identifier for the client performing the mutation.
        /// </summary>
        public string ClientMutationId { get; }

        /// <summary>
        /// The updated discussion.
        /// </summary>
        public TeamDiscussion TeamDiscussion => this.CreateProperty(x => x.TeamDiscussion, Octokit.GraphQL.Model.TeamDiscussion.Create);

        internal static UpdateTeamDiscussionPayload Create(Expression expression)
        {
            return new UpdateTeamDiscussionPayload(expression);
        }
    }
}