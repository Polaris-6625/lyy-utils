---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/103236054?s=96&v=4',
    name: 'Ocean',
    links: [
      { icon: 'github', link: 'https://github.com/Polaris-6625' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      lyy-utils
    </template>
    <template #lead>
      lyy-utils工具库目前由Lyy个人维护，欢迎对工具库设计开发感兴趣的大佬加入
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
