<template>
  <div class="container">
    <fs-table :data="data" :columns="columns">
      <!-- 使用插槽有完整的类型提示 -->
      <template #bodyCell="{ row, columnKey }">
        <!-- v-if选择想要自定义列 -->
        <template v-if="columnKey === 'name'">
          <span style="color: red">{{ row.name }}-123</span>
        </template>
        <!-- 判断想要自定义列即可 -->
        <template v-else-if="columnKey === 'date'">
          <span style="color: blue">{{ row.address }}</span>
        </template>
      </template>
    </fs-table>
  </div>
</template>

<script setup lang="ts">
import { FsTable } from "./components/FsTable";
import type { IFsColumn } from "./components/FsTable/src/type";

interface IData {
  date: string;
  name: string;
  address: string;
}

const columns: IFsColumn[] = [
  {
    prop: "date",
    columnKey: "date",
    label: "日期",
    align: "center",
  },
  {
    prop: "name",
    columnKey: "name",
    label: "名字",
    align: "center",
  },
  {
    prop: "address",
    columnKey: "address",
    label: "地址",
    align: "center",
  },
];

const data: IData[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
