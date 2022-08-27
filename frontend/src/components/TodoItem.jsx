import { Box, Button, Flex, Tag, Spacer, Text } from '@chakra-ui/react'

export function TodoItem({ todo, deleteTodo }) {

    return (
        <Box bg={'gray.100'} borderRadius="lg" p={4} m={4}>
            <Flex>
                <Text><strong>{todo.title}</strong></Text>
                <Spacer />
                <Tag p={2} colorScheme={todo.completed ? 'green' : 'red'}>
                    {todo.completed ? 'Completed' : 'Pending'}
                </Tag>
            </Flex>
            <Flex>
                <Text>
                    {todo.description}
                </Text>
            </Flex>
            <Button colorScheme={"red"} mt={1} variant='outline' onClick={() => {
                deleteTodo(todo.id)
            }}>Delete</Button>
        </Box >
    )
}