const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="bg-blue-900 w-screen h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
 
export default AuthLayout;