export interface selectQueryType {
  fields: any;
  where?: any;
}

export interface updateQueryType {
  fields: string;
  values: any;
  where: any;
}

export interface deleteQueryType {
  where: any;
  fields?: any;
}
