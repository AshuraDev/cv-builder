export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs ">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-extrabold bg-transparent">
            CV<span className="text-primary">Builder</span>
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
