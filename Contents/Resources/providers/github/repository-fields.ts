import { obj } from "../../tools";

const allRepositoryFields = obj.defaults(
  { toString: () => allRepositoryFields.join(" ") },
  {
    assignableUsers: true,
    codeOfConduct: true,
    contactLinks: true,
    createdAt: true,
    defaultBranchRef: true,
    deleteBranchOnMerge: true,
    description: true,
    diskUsage: true,
    forkCount: true,
    fundingLinks: true,
    hasIssuesEnabled: true,
    hasWikiEnablehasProjectsEnabled: true,
    homepageUrl: true,
    id: true,
    isArchived: true,
    isBlankIssuesEnabled: true,
    isEmpty: true,
    isFork: true,
    isInOrganization: true,
    isMirror: true,
    isPrivate: true,
    isSecurityPolicyEnabled: true,
    isTemplate: true,
    isUserConfigurationRepository: true,
    issueTemplates: true,
    issues: true,
    labels: true,
    languages: true,
    latestRelease: true,
    licenseInfo: true,
    mentionableUsers: true,
    mergeCommitAllowed: true,
    milestones: true,
    mirrorUrl: true,
    name: true,
    nameWithOwner: true,
    openGraphImageUrl: true,
    owner: true,
    parent: true,
    primaryLanguage: true,
    projects: true,
    pullRequestTemplates: true,
    pullRequests: true,
    pushedAt: true,
    rebaseMergeAllowed: true,
    repositoryTopics: true,
    securityPolicyUrl: true,
    squashMergeAllowed: true,
    sshUrl: true,
    stargazerCount: true,
    templateRepository: true,
    updatedAt: true,
    url: true,
    usesCustomOpenGraphImage: true,
    viewerCanAdminister: true,
    viewerDefaultCommitEmail: true,
    viewerDefaultMergeMethod: true,
    viewerHasStarred: true,
    viewerPermission: true,
    viewerPossibleCommitEmails: true,
    viewerSubscription: true,
    "watchers  ": true,
  },
);
