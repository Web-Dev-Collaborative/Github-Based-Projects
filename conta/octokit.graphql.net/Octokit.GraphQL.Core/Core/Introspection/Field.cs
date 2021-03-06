using System;
using System.Linq.Expressions;
using Octokit.GraphQL.Core.Builders;

namespace Octokit.GraphQL.Core.Introspection
{
    public class Field : QueryableValue<Field>
    {
        public Field(Expression expression)
            : base(expression)
        {
        }

        public string Name { get; }
        public string Description { get; }
        public IQueryableList<InputValue> Args => this.CreateProperty(x => x.Args);
        public SchemaType Type => this.CreateProperty(x => x.Type, SchemaType.Create);
        public bool IsDeprecated { get; }
        public string DeprecationReason { get; }
    }
}
