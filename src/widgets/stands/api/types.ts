export type Stand = {
  id: number;
  name: string;
  status: string;
  user: string;
  datetime: number;
  branches: {
    frontend: string;
    backend: string;
  };
};
