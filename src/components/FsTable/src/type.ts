export interface IFsTableProps<T> {
  // 数据源
  data: T[];
  // 渲染列配置项
  columns?: IFsColumn[];
}

// 列配置项
export interface IFsColumn {
  prop: string;
  label: string;
  columnKey?: string;
  [key: string]: any;
}
