import { Center } from '@/core/components/Flex';
import { Text } from '@/core/components/Text';

const App = () => {
  return (
    <Center width="100%" height="100vh">
      <Center background={'pink'} size="200px">
        <Text>Hello world!</Text>
        <Text maxLines={1}>
          风急天高猿啸哀，渚清沙白鸟飞回。 无边落木萧萧下，不尽长江滚滚来。
        </Text>
      </Center>
    </Center>
  );
};

export default App;
