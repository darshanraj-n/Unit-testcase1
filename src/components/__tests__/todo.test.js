import {render,screen,cleanup} from '@testing-library/react'
import Todo from '../todo'
import renderer from 'react-test-renderer'

afterEach(()=>{
    cleanup()
})

test('should render incomplete todo component',()=>{
    const todo = {id: 1, title:'title 1', completed:false,}
    render(<Todo todo={todo}/>)
    const todoElement=screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('title 1')
    expect(todoElement).not.toContainHTML('<strike>');
})

test('should render todo component',()=>{
    const todo = {id: 2, title:'title 2', completed:true,}
    render(<Todo todo={todo}/>)
    const todoElement=screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('title 2')
})

test('matces snapshots',()=>{
    const todo = {id: 1, title:'title 1', completed:false,}
    const tree = renderer.create(<Todo todo={todo}/>).toJSON()
    expect(tree).toMatchSnapshot()
})