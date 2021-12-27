export class Item {

  folder_name: string;
  item_description: string;
  is_marked: any;
  constructor(
    folder_name: string,
    item_description: string,
    is_marked: any
  ) {
    this.folder_name = folder_name;
    this.item_description = item_description;
    this.is_marked = is_marked;
   }

}
