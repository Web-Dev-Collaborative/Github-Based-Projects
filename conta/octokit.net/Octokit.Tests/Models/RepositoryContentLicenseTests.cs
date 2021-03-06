using System;
using System.Collections.Generic;
using Octokit.Internal;
using Xunit;

namespace Octokit.Tests.Models
{
    public class RepositoryContentLicenseTests
    {
        [Fact]
        public void CanBeDeserializedFromRepositoryContentLicenseJson()
        {
            const string json = @"{
  ""name"": ""LICENSE"",
  ""path"": ""LICENSE"",
  ""sha"": ""401c59dcc4570b954dd6d345e76199e1f4e76266"",
  ""size"": 1077,
  ""url"": ""https://api.github.com/repos/benbalter/gman/contents/LICENSE?ref=master"",
  ""html_url"": ""https://github.com/benbalter/gman/blob/master/LICENSE"",
  ""git_url"": ""https://api.github.com/repos/benbalter/gman/git/blobs/401c59dcc4570b954dd6d345e76199e1f4e76266"",
  ""download_url"": ""https://raw.githubusercontent.com/benbalter/gman/master/LICENSE?lab=true"",
  ""type"": ""file"",
  ""content"": ""VGhlIE1JVCBMaWNlbnNlIChNSVQpCgpDb3B5cmlnaHQgKGMpIDIwMTMgQmVu\nIEJhbHRlcgoKUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBv\nZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZgp0\naGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmls\nZXMgKHRoZSAiU29mdHdhcmUiKSwgdG8gZGVhbCBpbgp0aGUgU29mdHdhcmUg\nd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRh\ndGlvbiB0aGUgcmlnaHRzIHRvCnVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwg\ncHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwg\nY29waWVzIG9mCnRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25z\nIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywK\nc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgpUaGUgYWJv\ndmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGlj\nZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwKY29waWVzIG9yIHN1YnN0YW50\naWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4KClRIRSBTT0ZUV0FSRSBJ\nUyBQUk9WSURFRCAiQVMgSVMiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBL\nSU5ELCBFWFBSRVNTIE9SCklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJ\nTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBG\nSVRORVNTCkZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklO\nR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUgpDT1BZ\nUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdF\nUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIKSU4gQU4gQUNUSU9OIE9G\nIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBP\nVVQgT0YgT1IgSU4KQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBU\nSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS4K\n"",
  ""encoding"": ""base64"",
  ""_links"": {
    ""self"": ""https://api.github.com/repos/benbalter/gman/contents/LICENSE?ref=master"",
    ""git"": ""https://api.github.com/repos/benbalter/gman/git/blobs/401c59dcc4570b954dd6d345e76199e1f4e76266"",
    ""html"": ""https://github.com/benbalter/gman/blob/master/LICENSE""
  },
  ""license"": {
    ""key"": ""mit"",
    ""name"": ""MIT License"",
    ""spdx_id"": ""MIT"",
    ""url"": ""https://api.github.com/licenses/mit"",
    ""featured"": true
  }
}";
            var serializer = new SimpleJsonSerializer();

            var license = serializer.Deserialize<RepositoryContentLicense>(json);
            var licenseMetadata = license.License;

            Assert.Equal("LICENSE", license.Name);
            Assert.Equal("LICENSE", license.Path);
            Assert.Equal("401c59dcc4570b954dd6d345e76199e1f4e76266", license.Sha);
            Assert.NotNull(license.License);
            Assert.Equal("mit", licenseMetadata.Key);
        }
    }
}

