---
title: Blog
---



<script setup>
import { data as posts } from './data/blog.data.mjs'
</script>


# Blog Posts

<ul>
    <li v-for="post of posts">
        <a :href="post.url">{{ post.frontmatter.title }}</a> - <small>{{post.frontmatter.excerpt}}</small>
    </li>
</ul>

