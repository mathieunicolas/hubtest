<template>
  <div>
  <h1>Home</h1>
    <button @click="postUser">Click me</button>
  </div>
</template>

<script lang="ts" setup>
const postUser = async () => {
  const data = await $fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      name: 'John Doe',
      email: 'blabla',
      password: '123456',
      avatar: 'blabla',
      createdAt: 'blabla',
    }
  })
  console.log(data);
  
}
</script>

<style>

</style>