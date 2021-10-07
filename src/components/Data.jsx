import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Layout from './Layout'
import { fetchData } from '../lib'

const Data = ({ options }) => {

    const BASE_URL = 'https://jsonplaceholder.typicode.com/'

    const [selectedOption, setSelectedOption] = useState('posts')
    const [data, setData] = useState([])

    //albums, photos, todos have a title property in their objects

    useEffect(() => {
        let fetchFunction = async () => {
            let dataFromEndpoint = await fetchData(BASE_URL, selectedOption)
            console.log(dataFromEndpoint)
            setData(dataFromEndpoint)
        }
        fetchFunction()
    }, [selectedOption])

    // if we were in a class component
    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.selectedOption !== this.state.selectedOption){
    //         this.fetchFunction()
    //     }
    // }

    return (
        <Layout>
            <Form.Group>
                <Form.Label>Let's do a fetch!</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedOption}
                    onChange={e => setSelectedOption(e.target.value)}
                >
                    {
                        options.map((endpoint, i) => (
                            <option key={i}>{endpoint}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
            <ListGroup>
                {
                    data.map(element => (
                        <ListGroup.Item key={element.id}>{element.title}</ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Layout>
    )
}

export default Data