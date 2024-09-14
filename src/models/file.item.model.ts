export class FileItem {
  id: string = "";
  name: string = "";
  creation: Date = new Date();
  owners: FileOwner[] = [];
  type: FileType = FileType.FILE;
  parentId?: string;
}

export interface FileOwner {
  name: string;
  avatarUrl: string;
}

export enum FileType {
  FOLDER = 0,
  FILE = 1
}
