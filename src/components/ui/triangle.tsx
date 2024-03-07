export const Triangle = ({
  className,
  hike,
}: {
  className?: string;
  hike: boolean;
}) => (
  <div
    style={{
      width: 0,
      height: 0,
      borderLeft: "4px solid transparent",
      borderRight: "4px solid transparent",
      borderBottom: hike ? "8px solid #14B079" : "",
      borderTop: !hike ? "8px solid #E96975" : "",
      transform: "scaleX(125%)",
    }}
    className={className}
  />
);
