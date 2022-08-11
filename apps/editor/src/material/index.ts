interface Category {
  name: string;
}


interface IMaterialDate {
  // 版本
  version: string;
  // 物料源 source
  source: string;
}


interface IMaterial extends IMaterialDate {
  // 物料类型
  type: string;
  // 物料的类目
  category: Category;

  // 数据
  date: IMaterialDate[];


}
