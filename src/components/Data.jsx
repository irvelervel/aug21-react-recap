import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Layout from './Layout'
import { fetchData } from '../lib'

const Data = ({ options }) => {

    const BASE_URL = 'https://jsonplaceholder.typicode.com/'

    const [selectedOption, setSelectedOption] = useState('posts')
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData(BASE_URL, selectedOption)
    }, [])

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
        </Layout>
    )
}

export default Data