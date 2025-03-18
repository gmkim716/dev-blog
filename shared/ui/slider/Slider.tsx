interface SliderProps {
  className?: string;
  id: string;
  min: number;
  max: number;
  step: number;
  value: number[];
  onChange: (value: number[]) => void;
}

export default function Slider({
  className,
  id,
  min,
  max,
  step,
  value,
  onChange,
}: SliderProps) {
  return (
    <div className={className}>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(e) => onChange([Number(e.target.value)])}
      />
    </div>
  );
}
