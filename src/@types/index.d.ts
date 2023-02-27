declare global {
  declare module "*.png";
  declare module "*.gif";
  declare module "*.svg";
  declare module "*.jpg";
  declare module "*.jpeg";

  declare module "*.svg?component" {
    const ReactComponent: React.ComponentType<React.SVGAttributes<SVGElement>>;
    export default ReactComponent;
  }
}
export {};
