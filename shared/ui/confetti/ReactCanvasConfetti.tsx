import { useEffect, useRef, CSSProperties } from "react";
import canvasConfetti, {
  CreateTypes,
  GlobalOptions,
  Options,
} from "canvas-confetti";

interface IProps extends Partial<Options>, Partial<GlobalOptions> {
  fire?: boolean;
  reset?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
  refConfetti?: (confetti: CreateTypes | null) => void;
  onDecay?: () => void;
  onFire?: () => void;
  onReset?: () => void;
}

export default function ReactCanvasConfetti({
  fire = false,
  reset = false,
  width,
  height,
  className,
  style,
  refConfetti,
  onDecay,
  onFire,
  onReset,
  resize = true,
  useWorker = true,
  ...confettiProps
}: IProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null);
  const confettiInstance = useRef<CreateTypes | null>(null);

  // 초기 설정
  useEffect(() => {
    if (!refCanvas.current) return;

    const globalOptions: GlobalOptions = {
      resize,
      useWorker,
    };

    confettiInstance.current = canvasConfetti.create(
      refCanvas.current,
      globalOptions
    ) as CreateTypes;

    refConfetti?.(confettiInstance.current);

    return () => {
      refConfetti?.(null);
    };
  }, [resize, useWorker, refConfetti]);

  // fire 효과 처리
  useEffect(() => {
    if (!confettiInstance.current || !fire) return;

    onFire?.();

    const promise = confettiInstance.current(confettiProps);
    promise?.then(() => {
      onDecay?.();
    });
  }, [fire, confettiProps, onFire, onDecay]);

  // reset 효과 처리
  useEffect(() => {
    if (!confettiInstance.current || !reset) return;

    confettiInstance.current.reset();
    onReset?.();
  }, [reset, onReset]);

  return (
    <canvas
      ref={refCanvas}
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 99,
        ...style,
      }}
      className={className}
      width={width}
      height={height}
    />
  );
}
