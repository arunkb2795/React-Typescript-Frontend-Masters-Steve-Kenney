type BoxProps = {
  children: React.ReactNode;
};

export const Box = ({ children }: BoxProps) => {
  return (
    <div>
      <p>Hello I'm A Box.</p>
      {children}
    </div>
  );
};

export default function Application() {
  return (
    <section>
      <h1>Hi I'm Application.</h1>
      <Box>
        <p>I'm A Box inside Application</p>
        <Box>I'm A Nested Child element.</Box>
      </Box>
    </section>
  );
}
