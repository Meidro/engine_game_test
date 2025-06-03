export type RendererClassArgs = Partial<{
  width: number;
  height: number;
  background: string;
  update: (timestamp: number) => void;
}>;
