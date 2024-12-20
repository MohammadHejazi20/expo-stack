'use dom';
import '@/global.css';
import { Button } from './ui/button';

export default function MyComponent({
  name,
  bearsCount,
  addBears,
}: {
  name: string;
  bearsCount: number;
  dom: import('expo/dom').DOMProps;
  addBears: () => void;
}) {
  return (
    <div>
      <h1 className="font-bold text-blue-400">Hello, {name}</h1>
      <h2>Number of bears: {bearsCount}</h2>
      <Button title="Increase Population" onClick={() => addBears()}>
        Increase Population
      </Button>
    </div>
  );
}
