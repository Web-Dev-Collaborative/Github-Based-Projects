using System;
using System.Linq;
using System.Linq.Expressions;

namespace Octokit.GraphQL.Core
{
    public class QueryableList<T> : IQueryableList<T>
    {
        public QueryableList(Expression expression)
        {
            Expression = expression;
        }

        public Type ElementType => typeof(T);
        public Expression Expression { get; }
    }
}
