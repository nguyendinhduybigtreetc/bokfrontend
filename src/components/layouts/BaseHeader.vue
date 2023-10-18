<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">{{ $t('textlogo') }}</el-menu-item>
    <el-sub-menu index="2">
      <template #title>{{ $t('workspace') }}</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>{{ $t('info') }}</el-menu-item>
    <el-menu-item index="4">{{ $t('orders') }}</el-menu-item>
    <el-sub-menu index="5">
      <template #title>{{ $t('shortname') }}</template>
      <el-menu-item index="5-1" @click="$i18n.locale = 'en'">{{ $t('english') }}</el-menu-item>
      <el-menu-item index="5-2" @click="$i18n.locale = 'vi'">{{ $t('vietnamese') }}</el-menu-item>
      <el-menu-item index="5-3" @click="$i18n.locale = 'zh'">{{ $t('chinese') }}</el-menu-item>
    </el-sub-menu>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>

  </el-menu>
</template>
