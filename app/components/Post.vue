<script setup lang="ts">
import type { PostFragment } from '#graphql-operations'

const props = defineProps<{
  post: PostFragment
}>()
const active = useState()
const featuredImage = useFeaturedImage(props.post)
</script>

<template>
  <NuxtLink
    v-if="post.uri"
    :to="post.uri"
    @click="active = post.id"
  >
    <UCard>
      <template #header>
        <div class="w-full">
          <NuxtImg
            v-if="featuredImage"
            :src="featuredImage"
            :alt="'Featured image for ' + post.title"
            class="object-cover rounded-t-lg imgTransition"
            :class="{ active: active === post.id }"
            sizes="400px sm:600px md:400px"
            :width="600"
            :height="400"
          />
        </div>
      </template>
      <h1
        class="font-semibold text-2xl"
        :class="{ active: active === post.id }"
      >
        {{ post.title }}
      </h1>
      <p
        v-if="post.date"
        class="text-xs mt-2"
      >
        <nuxt-time
          :datetime="post.date"
          month="long"
          day="numeric"
          year="numeric"
          locale="nl-BE"
        />
      </p>
      <template #footer>
        <div v-html="post.excerpt" />
      </template>
    </UCard>
  </NuxtLink>
</template>

<style scoped>
h1.active {
    view-transition-name: post;
}
img.imgTransition.active {
    view-transition-name: featured-image;
}
</style>

<style>
::view-transition-old(post),
::view-transition-new(post) {
    width: auto;
}
</style>
