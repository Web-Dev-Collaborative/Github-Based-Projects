namespace Octokit.GraphQL.Model
{
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using Octokit.GraphQL.Core;
    using Octokit.GraphQL.Core.Builders;

    /// <summary>
    /// Autogenerated return type of AddPullRequestReviewThread
    /// </summary>
    public class AddPullRequestReviewThreadPayload : QueryableValue<AddPullRequestReviewThreadPayload>
    {
        internal AddPullRequestReviewThreadPayload(Expression expression) : base(expression)
        {
        }

        /// <summary>
        /// A unique identifier for the client performing the mutation.
        /// </summary>
        public string ClientMutationId { get; }

        /// <summary>
        /// The newly created thread.
        /// </summary>
        public PullRequestReviewThread Thread => this.CreateProperty(x => x.Thread, Octokit.GraphQL.Model.PullRequestReviewThread.Create);

        internal static AddPullRequestReviewThreadPayload Create(Expression expression)
        {
            return new AddPullRequestReviewThreadPayload(expression);
        }
    }
}