import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  spinDuration = "10s",
  shouldSpin = false,
  shouldOrbit = false,
  orbitDuration = "30s",
}: {
  children: React.ReactNode;
  size: number;
  rotation: number;
  spinDuration?: string;
  shouldSpin?: boolean;
  shouldOrbit?: boolean;
  orbitDuration?: string;
}) => {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={twMerge(shouldOrbit === true && "animate-spin")}
          style={{ animationDuration: orbitDuration }}
        >
          <div
            className=""
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className="">
              <div
                className={twMerge(
                  shouldSpin === true && "inline-flex animate-spin"
                )}
                style={{
                  transform: `rotate(${rotation * -1}deg)`,
                  animationDuration: spinDuration,
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
