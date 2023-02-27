import { FormEventHandler } from 'react';

type ControlsProps = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function Controls({ name, onChange, onSubmit }: ControlsProps) {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={onSubmit}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
}
