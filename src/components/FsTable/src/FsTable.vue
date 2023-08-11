<template>
  <div class="fs-table-container">
    <el-table :data="props.data">
      <template v-for="config in props.columns">
        <el-table-column v-if="!config.columnKey" :="config"></el-table-column>
        <el-table-column v-else :="config">
          <template #default="scope">
            <slot name="bodyCell" :row="scope.row" :columnKey="config.columnKey">{{ scope.row[config.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
      <!-- 提供插槽，保持原始 table 用法 -->
      <slot name="table"> </slot>
    </el-table>
  </div>
</template>

<script setup lang="ts" generic="T">
import type { IFsTableProps } from "./type";
const props = defineProps<IFsTableProps<T>>();

defineSlots<{
  bodyCell(props: { row: T; columnKey: string }): any;
  table(): any;
}>();
</script>

<style scoped>
.fs-table-container {
  width: 100%;
  height: 100%;
}
</style>
