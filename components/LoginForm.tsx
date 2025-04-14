'use dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import '@/global.css';
import { cn } from '@/lib/utils';

function LoginForm({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onLogin,
}: {
  dom: import('expo/dom').DOMProps;
  email: string;
  password: string;
  onChangeEmail: (email: string) => void;
  onChangePassword: (password: string) => void;
  onLogin: () => void;
}) {
  return (
    <div className={cn('mx-auto flex flex-col gap-6 overflow-hidden scroll-smooth p-4')}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => onChangeEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => onChangePassword(e.target.value)}
                />
              </div>
              <Button
                variant="default"
                type="submit"
                // className="w-full transform transition-transform active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  onLogin && onLogin();
                }}>
                Login
              </Button>
              <Button
                variant="neutral"
                // className="w-full transform transition-transform active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  onLogin && onLogin();
                }}>
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <a
                // href="#"
                className="underline underline-offset-4"
                onClick={(e) => {
                  e.preventDefault();
                  onLogin && onLogin();
                }}>
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
